import type { Metadata } from "next";

export const SITE_URL = "https://www.payscribe.co";
export const SITE_NAME = "Payscribe";
// Version the URL when the generated artwork changes. Social platforms cache
// preview images aggressively, even after a deployment has been updated.
export const DEFAULT_OG_IMAGE = "/opengraph-image?v=2";

type PageMetadataInput = {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
	image?: string;
	type?: "website" | "article";
	noIndex?: boolean;
	languages?: Record<string, string>;
};

export function createPageMetadata({
	title,
	description,
	path,
	keywords,
	image = DEFAULT_OG_IMAGE,
	type = "website",
	noIndex = false,
	languages,
}: PageMetadataInput): Metadata {
	const canonical = path.startsWith("http") ? path : new URL(path, SITE_URL).toString();
	const imageUrl = image.startsWith("http") ? image : new URL(image, SITE_URL).toString();

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical,
			languages: languages
				? Object.fromEntries(Object.entries(languages).map(([key, value]) => [key, absoluteUrl(value)]))
				: undefined,
		},
		openGraph: {
			type,
			url: canonical,
			siteName: SITE_NAME,
			title,
			description,
			images: [{ url: imageUrl, width: 1200, height: 630, alt: `${title} — ${SITE_NAME}` }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [imageUrl],
		},
		robots: noIndex ? { index: false, follow: false } : undefined,
	};
}

export function absoluteUrl(path: string) {
	return path.startsWith("http") ? path : new URL(path, SITE_URL).toString();
}
