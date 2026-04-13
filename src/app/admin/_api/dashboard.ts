"use client";

import { adminApi } from "./client";

export type DashboardData = {
  stats: { published: number; drafts: number; newContacts: number };
  recentPosts: any[];
  recentContacts: any[];
};

export async function getDashboard() {
  const res = await adminApi.get("/api/admin/dashboard", { headers: { "cache-control": "no-store" } });
  return res.data as { ok: true } & DashboardData;
}

