import axios from "axios";
import { headers } from "next/headers";

export type PublicBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category: "Company" | "Product" | "Finance" | "API";
  contentHtml?: string;
  coverImageUrl?: string | null;
  publishedAt?: string | Date | null;
  updatedAt?: string | Date;
};

function getBaseUrlFromHeaders(h: Headers) {
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export async function getPublishedPostsFromApi(): Promise<PublicBlogPost[]> {
  const h = await headers();
  const baseUrl = getBaseUrlFromHeaders(h);
  const url = new URL("/api/blog", baseUrl).toString();
  const res = await axios.get(url, { headers: { "cache-control": "no-store" }, withCredentials: false });
  const data = res.data as { ok?: boolean; posts?: PublicBlogPost[] };
  if (!data?.ok || !Array.isArray(data.posts)) return [];
  return data.posts;
}

export async function getPublishedPostBySlugFromApi(slug: string): Promise<PublicBlogPost | null> {
  const h = await headers();
  const baseUrl = getBaseUrlFromHeaders(h);
  const url = new URL(`/api/blog/${encodeURIComponent(slug)}`, baseUrl).toString();
  const res = await axios.get(url, { headers: { "cache-control": "no-store" }, withCredentials: false });
  const data = res.data as { ok?: boolean; post?: PublicBlogPost };
  if (!data?.ok || !data.post) return null;
  return data.post;
}

