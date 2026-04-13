import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { PressHero } from "./_components/PressHero";
import { PressFeaturedPostsSection } from "./_components/PressFeaturedPostsSection";
import Link from "next/link";
import { getPressPostsFromApi } from "./_api/press";

export const metadata: Metadata = {
	title: "Press",
	description: "External press coverage, announcements, and featured articles about Payscribe.",
	keywords: ["Payscribe", "press", "news", "announcements", "media", "fintech", "payments"],
};

export default async function PressPage() {
	let pressPosts: Awaited<ReturnType<typeof getPressPostsFromApi>> = [];
	let loadFailed = false;
	try {
		pressPosts = await getPressPostsFromApi();
	} catch {
		loadFailed = true;
	}

	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav />
			{pressPosts.length ? (
				<>
					<PressHero post={pressPosts[0]} />
					<PressFeaturedPostsSection posts={pressPosts} />
				</>
			) : (
				<section className='px-5 py-20'>
					<div className='mx-auto container'>
						<div className='rounded-3xl border border-slate-200 bg-white p-10 shadow-sm sm:p-14'>
							<p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
								Press
							</p>
							<h1 className='mt-3 text-2xl font-semibold text-secondary sm:text-3xl'>
								{loadFailed ? "Unable to load press items" : "No press items yet"}
							</h1>
							<p className='mt-3 max-w-2xl text-sm leading-relaxed text-slate-600'>
								{loadFailed
									? "We couldn’t load the Press feed right now. Please try again in a moment."
									: "We’ll publish external articles and announcements here as they go live."}
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
			<Footer />
		</div>
	);
}
