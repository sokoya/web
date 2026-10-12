"use client";

import { useEffect, useMemo, useState } from "react";
import { getApiErrorMessage } from "../_api/client";
import {
	listTransactionReports,
	updateTransactionReportStatus,
	type TransactionReport,
} from "../_api/reports";
import type { TransactionReportStatus } from "@/lib/transactionReport";

export function useAdminTransactionReports() {
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState<string | null>(null);
	const [items, setItems] = useState<TransactionReport[]>([]);
	const [updatingId, setUpdatingId] = useState<string | null>(null);

	const updating = useMemo(() => Boolean(updatingId), [updatingId]);

	async function load() {
		setErr(null);
		setLoading(true);
		try {
			const data = await listTransactionReports();
			setItems(data.reports ?? []);
		} catch (e) {
			setErr(getApiErrorMessage(e, "Failed to load reports"));
		} finally {
			setLoading(false);
		}
	}

	async function setStatus(id: string, next: TransactionReportStatus) {
		setUpdatingId(id);
		try {
			await updateTransactionReportStatus(id, next);
			setItems((prev) => prev.map((x) => (x.id === id ? { ...x, status: next } : x)));
		} catch (e) {
			throw new Error(getApiErrorMessage(e, "Failed to update status"));
		} finally {
			setUpdatingId(null);
		}
	}

	useEffect(() => {
		void load();
	}, []);

	return { loading, err, items, updating, updatingId, reload: load, setStatus, setItems };
}
