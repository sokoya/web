import {
	isSensitiveTransactionReport,
	TRANSACTION_REPORT_REASON_LABELS,
	type TransactionProduct,
	type TransactionReportReason,
} from "@/lib/transactionReport";

export type TransactionReportNotificationInput = {
	fullName: string;
	email: string;
	phone?: string;
	reference?: string;
	amount?: string;
	transactionDate?: string;
	product: TransactionProduct;
	reason: TransactionReportReason;
	description: string;
};

const SUPPORT_EMAIL = "support@payscribe.co";
const COMPLIANCE_EMAIL = "compliance@payscribe.co";

export function getTransactionReportRecipients(reason: TransactionReportReason) {
	if (isSensitiveTransactionReport(reason)) {
		return `${SUPPORT_EMAIL}, ${COMPLIANCE_EMAIL}`;
	}
	return SUPPORT_EMAIL;
}

function escapeHtml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function field(label: string, value?: string) {
	return value?.trim() ? value.trim() : "Not provided";
}

export async function sendTransactionReportNotification(
	input: TransactionReportNotificationInput,
) {
	const apiKey = process.env.POSTMARK_SERVER_TOKEN;
	const from = process.env.POSTMARK_FROM_EMAIL;
	const recipient = getTransactionReportRecipients(input.reason);

	if (!apiKey || !from) {
		throw new Error("Missing Postmark environment variables");
	}

	const reasonLabel = TRANSACTION_REPORT_REASON_LABELS[input.reason];
	const subject = `[Transaction report: ${reasonLabel}] ${input.fullName}`;
	const htmlContent = `
    <h2>New transaction report</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(field("Phone", input.phone))}</p>
    <p><strong>Reason:</strong> ${escapeHtml(reasonLabel)}</p>
    <p><strong>Product:</strong> ${escapeHtml(input.product)}</p>
    <p><strong>Reference:</strong> ${escapeHtml(field("Reference", input.reference))}</p>
    <p><strong>Amount:</strong> ${escapeHtml(field("Amount", input.amount))}</p>
    <p><strong>Date / time:</strong> ${escapeHtml(field("Date", input.transactionDate))}</p>
    <p><strong>Description:</strong></p>
    <p style="white-space: pre-wrap">${escapeHtml(input.description)}</p>
  `;
	const textContent = [
		"New transaction report",
		`Name: ${input.fullName}`,
		`Email: ${input.email}`,
		`Phone: ${field("Phone", input.phone)}`,
		`Reason: ${reasonLabel}`,
		`Product: ${input.product}`,
		`Reference: ${field("Reference", input.reference)}`,
		`Amount: ${field("Amount", input.amount)}`,
		`Date / time: ${field("Date", input.transactionDate)}`,
		"",
		input.description,
	].join("\n");

	const response = await fetch("https://api.postmarkapp.com/email", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"X-Postmark-Server-Token": apiKey,
		},
		body: JSON.stringify({
			From: from,
			To: recipient,
			Subject: subject,
			HtmlBody: htmlContent,
			TextBody: textContent,
			ReplyTo: input.email,
			MessageStream: "outbound",
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`Postmark email failed: ${response.status} ${body}`);
	}

	const data = (await response.json()) as { MessageID?: string };
	return { recipient, providerId: data.MessageID ?? null };
}
