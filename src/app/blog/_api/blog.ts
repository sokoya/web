import { cache } from "react";
import { getDb } from "@/lib/mongodb";

export type PublicBlogPost = {
	id: string;
	title: string;
	slug: string;
	excerpt?: string;
	category: "Company" | "Product" | "Finance" | "API" | "Engineering" | "Documentation";
	contentHtml?: string;
	coverImageUrl?: string | null;
	publishedAt?: string | null;
	updatedAt?: string;
};

function serializePost(post: Record<string, unknown>): PublicBlogPost {
	const publishedAt = toIsoString(post.publishedAt);
	const updatedAt = toIsoString(post.updatedAt);

	return {
		id: String(post._id),
		title: String(post.title ?? ""),
		slug: String(post.slug ?? ""),
		excerpt: typeof post.excerpt === "string" ? post.excerpt : undefined,
		category: post.category as PublicBlogPost["category"],
		contentHtml: typeof post.contentHtml === "string" ? post.contentHtml : undefined,
		coverImageUrl: typeof post.coverImageUrl === "string" ? post.coverImageUrl : null,
		publishedAt,
		updatedAt: updatedAt ?? undefined,
	};
}

function toIsoString(value: unknown): string | null {
	if (value instanceof Date) return value.toISOString();
	if (typeof value === "string" || typeof value === "number") {
		const date = new Date(value);
		return Number.isNaN(date.getTime()) ? null : date.toISOString();
	}
	return null;
}

export const getPublishedPostsFromApi = cache(async (): Promise<PublicBlogPost[]> => {
	const db = await getDb();
	const posts = await db
		.collection("posts")
		.find({ status: "published" })
		.sort({ publishedAt: -1, updatedAt: -1, _id: -1 })
		.limit(200)
		.toArray();

	return posts.map((post) => serializePost(post));
});

export const getPublishedPostBySlugFromApi = cache(
	async (slug: string): Promise<PublicBlogPost | null> => {
		const db = await getDb();
		const post = await db.collection("posts").findOne({ slug, status: "published" });
		return post ? serializePost(post) : null;
	},
);
