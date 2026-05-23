import type { Metadata } from "next";
import { Footer } from "@/app/_components/Footer";
import { Nav } from "@/app/_components/Nav";
import { BlogHero } from "./_components/BlogHero";
import { BlogFeaturedSection } from "./_components/BlogFeaturedSection";
import { BlogFeaturedPostsSection } from "./_components/BlogFeaturedPostsSection";
import { BlogNewsletterSection } from "./_components/BlogNewsletterSection";
import Link from "next/link";
import { getPublishedPostsFromApi } from "./_api/blog";

export const metadata: Metadata = {
	title: "Blog",
	description: "Read product updates, insights, and announcements from Payscribe.",
	keywords: ["Payscribe", "blog", "fintech", "payments", "product updates", "API", "stablecoin", "card issuing"],
};

export default async function BlogPage() {
	let posts: Awaited<ReturnType<typeof getPublishedPostsFromApi>> = [];
	let loadFailed = false;
	try {
		posts = await getPublishedPostsFromApi();
	} catch {
		loadFailed = true;
	}

	const hero = posts[0] ?? null;
	const featured = posts[0] ?? null;
	const latest = posts.slice(1, 4);

	return (
		<div className='min-h-screen bg-[#edf4fb] text-secondary'>
			<Nav />
			{posts.length ? (
				<>
					<BlogHero hero={hero} />
					<BlogFeaturedSection
						featured={featured ? { slug: featured.slug, title: featured.title, category: featured.category, coverImageUrl: featured.coverImageUrl, publishedAt: featured.publishedAt } : null}
						latest={latest.map((p) => ({ slug: p.slug, title: p.title, coverImageUrl: p.coverImageUrl, publishedAt: p.publishedAt }))}
					/>
					<BlogFeaturedPostsSection
						posts={posts.map((p) => ({
							id: p.id,
							title: p.title,
							slug: p.slug,
							excerpt: p.excerpt ?? "",
							category: p.category,
							coverImageUrl: p.coverImageUrl ?? null,
							publishedAt: p.publishedAt ?? null,
						}))}
					/>
				</>
			) : (
				<section className='bg-white px-5 py-20'>
					<div className='mx-auto container'>
						<div className='rounded-3xl border border-slate-200 bg-white p-10 shadow-sm sm:p-14'>
							<p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
								Blog
							</p>
							<h1 className='mt-3 text-2xl font-semibold text-secondary sm:text-3xl'>
								{loadFailed ? "Unable to load posts" : "No posts yet"}
							</h1>
							<p className='mt-3 max-w-2xl text-sm leading-relaxed text-slate-600'>
								{loadFailed
									? "We couldn’t load the blog right now. Please try again in a moment."
									: "Check back soon for product updates and insights from the team."}
							</p>
							<div className='mt-8 flex flex-wrap items-center gap-3'>
								<Link
									href='/'
									className='rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95'
								>
									Back to home
								</Link>
								<Link
									href='/contact-us'
									className='rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200'
								>
									Contact us
								</Link>
							</div>
						</div>
					</div>
				</section>
			)}
			<BlogNewsletterSection />
			<Footer />
		</div>
	);
}

