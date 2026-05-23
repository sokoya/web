"use client";

import { adminApi } from "./client";

export async function me() {
  const res = await adminApi.get("/api/admin/auth/me", { headers: { "cache-control": "no-store" } });
  return res.data as { ok: boolean; admin?: { email?: string } };
}

export async function login(input: { email: string; password: string }) {
  const res = await adminApi.post("/api/admin/auth/login", input);
  return res.data as { ok: true };
}

export async function logout() {
  const res = await adminApi.post("/api/admin/auth/logout");
  return res.data as { ok: true };
}

