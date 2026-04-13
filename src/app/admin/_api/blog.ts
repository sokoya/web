"use client";

import { adminApi } from "./client";

export type BlogStatus = "draft" | "published";
export type BlogCategory = "Company" | "Product" | "Finance" | "API";

export type BlogPostRow = {
  id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  status: BlogStatus;
  updatedAt?: string | Date;
  coverImageUrl?: string | null;
};

export async function listBlog(params: { page: number; pageSize: number }) {
  const res = await adminApi.get("/api/admin/blog", { params, headers: { "cache-control": "no-store" } });
  return res.data as { ok: true; posts: BlogPostRow[]; total: number; page: number; pageSize: number };
}

export async function publishPost(id: string) {
  const res = await adminApi.post(`/api/admin/blog/${id}/publish`);
  return res.data as { ok: true };
}

export async function unpublishPost(id: string) {
  const res = await adminApi.post(`/api/admin/blog/${id}/unpublish`);
  return res.data as { ok: true };
}

export async function deletePost(id: string) {
  const res = await adminApi.delete(`/api/admin/blog/${id}`);
  return res.data as { ok: true };
}

export type BlogPostDetail = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  status: BlogStatus;
  contentHtml: string;
  coverImageUrl?: string | null;
  coverImagePublicId?: string | null;
};

export async function getPost(id: string) {
  const res = await adminApi.get(`/api/admin/blog/${id}`, { headers: { "cache-control": "no-store" } });
  return res.data as { ok: true; post: BlogPostDetail };
}

export async function createPost(input: {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  status: BlogStatus;
  contentHtml: string;
  coverImageUrl?: string | null;
  coverImagePublicId?: string | null;
}) {
  const res = await adminApi.post("/api/admin/blog", input);
  return res.data as { ok: true; id: string };
}

export async function updatePost(
  id: string,
  input: {
    title: string;
    slug: string;
    excerpt: string;
    category: BlogCategory;
    status: BlogStatus;
    contentHtml: string;
    coverImageUrl?: string | null;
    coverImagePublicId?: string | null;
  },
) {
  const res = await adminApi.patch(`/api/admin/blog/${id}`, input);
  return res.data as { ok: true };
}

