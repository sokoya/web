"use client";

import { adminApi } from "./client";

export type PressItem = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  thumbnail?: string;
  url: string;
  source?: "seed" | "manual" | string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export async function listPress() {
  const res = await adminApi.get("/api/admin/press", { headers: { "cache-control": "no-store" } });
  return res.data as { ok: true; items: PressItem[] };
}

export async function getPressItem(id: string) {
  const res = await adminApi.get(`/api/admin/press/${id}`, { headers: { "cache-control": "no-store" } });
  return res.data as { ok: true; item: PressItem };
}

export async function createPressItem(input: Omit<PressItem, "id" | "createdAt" | "updatedAt" | "source">) {
  const res = await adminApi.post("/api/admin/press", input);
  return res.data as { ok: true; id: string };
}

export async function updatePressItem(
  id: string,
  input: Partial<Omit<PressItem, "id" | "createdAt" | "updatedAt" | "source">>,
) {
  const res = await adminApi.patch(`/api/admin/press/${id}`, input);
  return res.data as { ok: true };
}

export async function deletePressItem(id: string) {
  const res = await adminApi.delete(`/api/admin/press/${id}`);
  return res.data as { ok: true };
}

