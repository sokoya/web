import { z } from "zod";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";
import {
	TRANSACTION_PRODUCTS,
	TRANSACTION_REPORT_REASONS,
} from "@/lib/transactionReport";
import {
	getTransactionReportRecipients,
	sendTransactionReportNotification,
} from "@/lib/transactionReportNotification";

const optionalText = z
	.string()
	.trim()
	.max(80)
	.optional()
	.transform((value) => (value ? value : undefined));

const ReportSchema = z
	.object({
		fullName: z.string().trim().min(2).max(120),
		email: z.string().trim().email(),
		phone: optionalText,
		reference: optionalText,
		amount: optionalText,
		transactionDate: optionalText,
		product: z.enum(TRANSACTION_PRODUCTS),
		reason: z.enum(TRANSACTION_REPORT_REASONS),
		description: z.string().trim().min(2).max(5000),
	})
	.superRefine((data, ctx) => {
		const hasReference = Boolean(data.reference);
		const hasAmountAndDate = Boolean(data.amount && data.transactionDate);
		if (!hasReference && !hasAmountAndDate) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Provide a transaction reference, or both the amount and the date of the transaction.",
				path: ["reference"],
			});
		}
	});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const input = ReportSchema.parse(body);

		const db = await getDb();
		const now = new Date();
		const notificationRecipient = getTransactionReportRecipients(input.reason);
		const res = await db.collection("transaction_reports").insertOne({
			...input,
			status: "new",
			notification: {
				recipient: notificationRecipient,
				status: "pending",
			},
			createdAt: now,
			updatedAt: now,
		});

		try {
			const notification = await sendTransactionReportNotification(input);
			await db.collection("transaction_reports").updateOne(
				{ _id: res.insertedId },
				{
					$set: {
						notification: {
							recipient: notification.recipient,
							status: "sent",
							providerId: notification.providerId,
							sentAt: new Date(),
						},
					},
				},
			);
		} catch (notificationError) {
			console.error("Failed to send transaction report notification", notificationError);
			await db.collection("transaction_reports").updateOne(
				{ _id: res.insertedId },
				{
					$set: {
						notification: {
							recipient: notificationRecipient,
							status: "failed",
							error:
								notificationError instanceof Error
									? notificationError.message
									: "Unknown notification error",
							failedAt: new Date(),
						},
					},
				},
			);
		}

		return json({ ok: true, id: String(res.insertedId) }, { status: 201 });
	} catch (e) {
		if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
		return error(e instanceof Error ? e.message : "Bad request", 400);
	}
}
