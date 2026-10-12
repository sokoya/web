export const TRANSACTION_PRODUCTS = [
	"Airtime",
	"Bill payment",
	"Bank transfer",
	"Card",
	"Remittance",
	"Other",
] as const;

export const TRANSACTION_REPORT_REASONS = [
	"delayed_value",
	"wrong_amount",
	"unauthorised",
	"suspected_fraud",
	"other",
] as const;

export const TRANSACTION_REPORT_STATUSES = [
	"new",
	"investigating",
	"resolved",
	"escalated",
] as const;

export type TransactionProduct = (typeof TRANSACTION_PRODUCTS)[number];
export type TransactionReportReason = (typeof TRANSACTION_REPORT_REASONS)[number];
export type TransactionReportStatus = (typeof TRANSACTION_REPORT_STATUSES)[number];

export const TRANSACTION_REPORT_REASON_LABELS: Record<
	TransactionReportReason,
	string
> = {
	delayed_value: "Delayed / no value yet",
	wrong_amount: "Wrong amount",
	unauthorised: "Unauthorised / I didn’t initiate this",
	suspected_fraud: "Suspected fraud",
	other: "Other",
};

export function isSensitiveTransactionReport(
	reason: TransactionReportReason,
) {
	return reason === "unauthorised" || reason === "suspected_fraud";
}
