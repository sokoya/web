"use client";

import { adminApi } from "./client";
import type {
	TransactionProduct,
	TransactionReportReason,
	TransactionReportStatus,
} from "@/lib/transactionReport";

export type TransactionReport = {
	id: string;
	fullName: string;
	email: string;
	phone?: string;
	reference?: string;
	amount?: string;
	transactionDate?: string;
	product: TransactionProduct;
	reason: TransactionReportReason;
	description: string;
	createdAt: string | Date;
	status: TransactionReportStatus;
};

export async function listTransactionReports() {
	const res = await adminApi.get("/api/admin/reports", {
		headers: { "cache-control": "no-store" },
	});
	return res.data as { ok: true; reports: TransactionReport[] };
}

export async function updateTransactionReportStatus(
	id: string,
	status: TransactionReportStatus,
) {
	const res = await adminApi.patch(`/api/admin/reports/${id}`, { status });
	return res.data as { ok: true };
}
