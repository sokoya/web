"use client";

import { adminApi } from "./client";

export async function uploadImage(file: File) {
  const form = new FormData();
  form.append("file", file);
  const res = await adminApi.post("/api/admin/upload/image", form, {
    headers: { "content-type": "multipart/form-data" },
  });
  return res.data as { ok: true; url: string; publicId: string };
}

export async function deleteImage(publicId: string) {
  const res = await adminApi.post("/api/admin/upload/image/delete", { publicId });
  return res.data as { ok: true };
}

