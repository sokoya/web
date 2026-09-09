import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
	const requestHeaders = await headers();
	const country =
		requestHeaders.get("x-vercel-ip-country") ||
		requestHeaders.get("cf-ipcountry") ||
		requestHeaders.get("x-country-code");

	return NextResponse.json(
		{
			country: country?.toUpperCase() || null,
			region: country?.toUpperCase() === "GB" ? "uk" : country ? "ng" : null,
		},
		{
			headers: {
				"Cache-Control": "private, no-store",
			},
		},
	);
}
