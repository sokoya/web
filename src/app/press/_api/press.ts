import axios from "axios";
import { headers } from "next/headers";

export type PressApiItem = {
	title: string;
	date: string;
	readTime: string;
	summary: string;
	thumbnail: string;
	url?: string;
};

function getBaseUrlFromHeaders(h: Headers) {
	const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
	const proto = h.get("x-forwarded-proto") ?? "http";
	return `${proto}://${host}`;
}

export async function getPressPostsFromApi(): Promise<PressApiItem[]> {
	const h = await headers();
	const baseUrl = getBaseUrlFromHeaders(h);
	const url = new URL("/api/press", baseUrl).toString();

	const res = await axios.get(url, {
		// Next.js caching is controlled at the page level; keep this request fresh.
		headers: { "cache-control": "no-store" },
		// Avoid proxy/cookie surprises; this is public anyway.
		withCredentials: false,
	});
	console.log(res);
	const data = res.data as { ok?: boolean; items?: PressApiItem[] };
	if (!data?.ok || !Array.isArray(data.items)) return [];
	return data.items;
}
