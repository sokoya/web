import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { BlogPostHero } from "./_components/BlogPostHero";
import { BlogPostContent } from "./_components/BlogPostContent";
import { BlogNewsletterSection } from "../_components/BlogNewsletterSection";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Gamepride (Legacy Post)",
	description: "Legacy static blog post page. New posts are served from the dynamic blog.",
	keywords: ["Payscribe", "blog", "legacy", "Gamepride"],
};

export default function BlogGamepridePage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav />
			<div className='px-5 pt-8'>
				<div className='mx-auto container'>
					<div className='rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900'>
						This page is a legacy static post. New posts are now served from{" "}
						<Link href='/blog' className='font-semibold underline'>
							/blog
						</Link>
						.
					</div>
				</div>
			</div>
			<BlogPostHero />
			<BlogPostContent />
			<BlogNewsletterSection />
			<Footer />
		</div>
	);
}

