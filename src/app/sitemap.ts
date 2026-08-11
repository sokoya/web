import type { MetadataRoute } from "next";
import { getPublishedPostsFromApi } from "@/app/blog/_api/blog";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

const staticPages = [
	{ path: "/", changeFrequency: "weekly", priority: 1 },
	{ path: "/for-business", changeFrequency: "monthly", priority: 0.9 },
	{ path: "/for-developers", changeFrequency: "monthly", priority: 0.9 },
	{ path: "/digital-payments", changeFrequency: "monthly", priority: 0.9 },
	{ path: "/cards-issuing", changeFrequency: "monthly", priority: 0.9 },
	{ path: "/stable-coin-rails", changeFrequency: "monthly", priority: 0.9 },
	{ path: "/savings-as-a-service", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/payment-link", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/invoicing", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/use-case", changeFrequency: "monthly", priority: 0.7 },
	{ path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
	{ path: "/case-studies/gamepride", changeFrequency: "yearly", priority: 0.6 },
	{ path: "/blog", changeFrequency: "weekly", priority: 0.8 },
	{ path: "/press", changeFrequency: "weekly", priority: 0.6 },
	{ path: "/faqs", changeFrequency: "monthly", priority: 0.6 },
	{ path: "/contact-us", changeFrequency: "yearly", priority: 0.5 },
	{ path: "/book-a-demo", changeFrequency: "yearly", priority: 0.7 },
	{ path: "/uk", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/cookies-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/acceptable-use-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/complaints-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/uk/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/uk/cookies-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/uk/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/uk/acceptable-use-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/uk/complaints-policy", changeFrequency: "yearly", priority: 0.3 },
] satisfies Array<{
	path: string;
	changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
	priority: number;
}>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
		url: absoluteUrl(page.path),
		changeFrequency: page.changeFrequency,
		priority: page.priority,
	}));

	const posts = await getPublishedPostsFromApi();
	const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
		url: absoluteUrl(`/blog/${post.slug}`),
		lastModified: post.updatedAt ?? post.publishedAt ?? undefined,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticEntries, ...blogEntries];
}
