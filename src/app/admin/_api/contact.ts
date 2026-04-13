"use client";

import { adminApi } from "./client";

export type SubmissionStatus = "new" | "in_progress" | "resolved";

export type ContactSubmission = {
  id: string;
  fullName: string;
  email: string;
  reason: "Support" | "Sales" | "Partnership" | "Other";
  description: string;
  createdAt: string | Date;
  status: SubmissionStatus;
};

export async function listSubmissions() {
  const res = await adminApi.get("/api/admin/contact", { headers: { "cache-control": "no-store" } });
  return res.data as { ok: true; submissions: ContactSubmission[] };
}

export async function updateSubmissionStatus(id: string, status: SubmissionStatus) {
  const res = await adminApi.patch(`/api/admin/contact/${id}`, { status });
  return res.data as { ok: true };
}

