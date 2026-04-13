"use client";

import Image from "next/image";
import featuredImage from "@/assets/images/blog.jpg";
import latestImage from "@/assets/images/digital.jpg";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewFadeUp, inViewZoom } from "@/lib/animations";

export function BlogFeaturedSection({
	featured,
	latest,
}: {
	featured: null | {
		slug: string;
		title: string;
		category: string;
		coverImageUrl?: string | null;
		publishedAt?: string | Date | null;
	};
	latest: Array<{
		slug: string;
		title: string;
		coverImageUrl?: string | null;
		publishedAt?: string | Date | null;
	}>;
}) {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white px-5 py-20'>
			<div className='mx-auto grid container gap-7 lg:grid-cols-[1.7fr_1fr]'>
				<Link href={featured ? `/blog/${featured.slug}` : "/blog"} className='block'>
					<motion.article
						{...inViewZoom({ reduced: reducedMotion, delay: 0.06, duration: 0.95, amount: 0.25 })}
						className='relative overflow-hidden rounded-[20px]'
					>
					<div className='relative h-[320px] sm:h-[470px]'>
						{featured?.coverImageUrl?.trim() ? (
							<Image
								src={featured.coverImageUrl}
								alt={featured.title}
								fill
								className='object-cover'
								sizes='(min-width: 1024px) 720px, 100vw'
							/>
						) : (
							<Image
								src={featuredImage}
								alt='Featured blog post'
								fill
								className='object-cover'
							/>
						)}
					</div>
					<div className='absolute inset-x-0 bottom-0 bg-[#111827]/55 px-6 py-6 text-white backdrop-blur-[2px] sm:px-7'>
						<p className='text-sm text-slate-300'>• {featured?.category ?? "Blog"}</p>
						<h3 className='mt-3 max-w-2xl text-3xl font-medium leading-tight sm:text-[40px]'>
							{featured?.title ?? "Explore the latest from Payscribe"}
						</h3>
						<p className='mt-4 text-sm text-slate-300'>
							{featured?.publishedAt ? new Date(featured.publishedAt).toLocaleDateString() : "—"}
						</p>
					</div>
					</motion.article>
				</Link>

				<motion.div {...heroDropFromTop({ reduced: reducedMotion, delay: 0.08 })}>
					<motion.h4
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.85 })}
						className='mb-5 text-2xl font-semibold text-secondary'
					>
						Latest Posts
					</motion.h4>
					<div className='space-y-4'>
						{latest.map((post, idx) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className='block'>
								<motion.article
								{...inViewFadeUp({
									reduced: reducedMotion,
									delay: 0.16 + idx * 0.08,
									duration: 0.8,
									amount: 0.4,
								})}
								className='flex gap-3 rounded-2xl border border-slate-200 bg-white p-3'
							>
								{post.coverImageUrl?.trim() ? (
									<Image
										src={post.coverImageUrl}
										alt={post.title}
										className='h-24 w-24 rounded-xl object-cover'
										width={96}
										height={96}
									/>
								) : (
									<Image
										src={latestImage}
										alt={post.title}
										className='h-24 w-24 rounded-xl object-cover'
										width={96}
										height={96}
									/>
								)}
								<div className='flex flex-1 flex-col justify-between py-1'>
									<p className='text-base font-medium leading-snug text-secondary'>
										{post.title}
									</p>
									<p className='text-xs text-slate-500'>
										{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "—"}
									</p>
								</div>
							</motion.article>
							</Link>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
