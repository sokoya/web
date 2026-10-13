import { ObjectId } from "mongodb";
import { z } from "zod";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";
import { TRANSACTION_REPORT_STATUSES } from "@/lib/transactionReport";

const UpdateSchema = z.object({
	status: z.enum(TRANSACTION_REPORT_STATUSES).optional(),
	note: z.string().max(5000).optional(),
});

export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
	try {
		await requireAdminOrThrow();
		const { id } = await ctx.params;
		const db = await getDb();
		const report = await db
			.collection("transaction_reports")
			.findOne({ _id: new ObjectId(id) });
		if (!report) return error("Not found", 404);
		return json({
			ok: true,
			report: { ...report, id: String(report._id), _id: undefined },
		});
	} catch (e) {
		return error(e instanceof Error ? e.message : "Bad request", 400);
	}
}

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
	try {
		await requireAdminOrThrow();
		const { id } = await ctx.params;
		const body = await req.json();
		const input = UpdateSchema.parse(body);

		const db = await getDb();
		const res = await db.collection("transaction_reports").updateOne(
			{ _id: new ObjectId(id) },
			{ $set: { ...input, updatedAt: new Date() } },
		);
		if (!res.matchedCount) return error("Not found", 404);
		return json({ ok: true });
	} catch (e) {
		if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
		return error(e instanceof Error ? e.message : "Bad request", 400);
	}
}
