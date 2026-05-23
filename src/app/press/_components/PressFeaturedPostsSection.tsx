"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import fallbackImg from "@/assets/images/blog.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

type Category = "All" | "Company" | "Product" | "Finance" | "API";

export type PressFeaturedPost = {
	id: string;
	category: Exclude<Category, "All">;
	tag: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	views: string;
	thumbnail?: string;
	url?: string;
};

const categories: Category[] = ["All", "Company", "Product", "Finance", "API"];

export function PressFeaturedPostsSection({
	posts,
}: {
	posts: Array<{
		title: string;
		date: string;
		readTime: string;
		summary: string;
		thumbnail: string;
		url?: string;
	}>;
}) {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	const [activeCategory, setActiveCategory] = useState<Category>("All");
	const [page, setPage] = useState(0);

	// Map press posts into featured card structure (category/tag/views are placeholders until real data source exists).
	const featuredPosts = useMemo<PressFeaturedPost[]>(
		() =>
			posts.map((p, idx) => ({
				id: String(idx + 1),
				category: "Company",
				tag: "Machine Learning",
				title: p.title,
				excerpt: p.summary,
				date: p.date,
				readTime: p.readTime,
				views: "—",
				thumbnail: p.thumbnail,
				url: p.url,
			})),
		[posts],
	);

	const filtered = useMemo(() => {
		if (activeCategory === "All") return featuredPosts;
		return featuredPosts.filter((p) => p.category === activeCategory);
	}, [activeCategory, featuredPosts]);

	useEffect(() => {
		setPage(0);
	}, [activeCategory]);

	const pageSize = 10;
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(page, totalPages - 1);
	const visible = filtered.slice(
		safePage * pageSize,
		safePage * pageSize + pageSize,
	);

	return (
		<section className='bg-white px-5 py-20'>
			<div className='mx-auto container'>
				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
					className='flex items-start justify-between gap-4'
				>
					<div>
						<motion.h2
							{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12, duration: 0.9 })}
							className='text-2xl font-semibold text-secondary sm:text-3xl'
						>
							Featured Press
						</motion.h2>
					</div>

					<div className='hidden items-center gap-3 sm:flex'>
						<button
							type='button'
							aria-label='Previous'
							onClick={() => setPage((p) => Math.max(0, p - 1))}
							disabled={safePage === 0}
							className='grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40'
						>
							<ChevronLeftIcon className='h-5 w-5' />
						</button>
						<button
							type='button'
							aria-label='Next'
							onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
							disabled={safePage >= totalPages - 1}
							className='grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40'
						>
							<ChevronRightIcon className='h-5 w-5' />
						</button>
					</div>
				</motion.div>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{visible.map((post, idx) => (
						<motion.article
							key={post.id}
							{...inViewZoom({
								reduced: reducedMotion,
								delay: 0.08 + idx * 0.08,
								duration: 0.9,
								amount: 0.25,
							})}
							className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'
						>
							{post.url ? (
								<a
									href={post.url}
									target='_blank'
									rel='noreferrer'
									className='block'
									aria-label={post.title}
								>
									<div className='relative h-[180px] w-full'>
										{post.thumbnail?.trim() ? (
											<img
												src={post.thumbnail}
												alt={post.title}
												className='h-[180px] w-full object-cover'
												loading='lazy'
											/>
										) : (
											<Image
												src={fallbackImg}
												alt={post.title}
												fill
												className='object-cover'
											/>
										)}
									</div>
								</a>
							) : (
								<div className='relative h-[180px] w-full'>
									{post.thumbnail?.trim() ? (
										<img
											src={post.thumbnail}
											alt={post.title}
											className='h-[180px] w-full object-cover'
											loading='lazy'
										/>
									) : (
										<Image
											src={fallbackImg}
											alt={post.title}
											fill
											className='object-cover'
										/>
									)}
								</div>
							)}
							<div className='p-6'>
								<p className='text-sm text-slate-500'>
									<span className='mr-2 align-middle text-[10px] text-amber-500'>
										●
									</span>
									{post.tag}
								</p>
								{post.url ? (
									<a
										href={post.url}
										target='_blank'
										rel='noreferrer'
										className='mt-3 block text-base font-semibold leading-snug text-secondary hover:underline'
									>
										{post.title}
									</a>
								) : (
									<h3 className='mt-3 text-base font-semibold leading-snug text-secondary'>
										{post.title}
									</h3>
								)}
								<p className='mt-3 text-sm leading-relaxed text-slate-500'>
									{post.excerpt}
								</p>
								<p className='mt-5 text-xs text-slate-400'>
									{post.date} &nbsp; • &nbsp; {post.readTime}{" "}
									{post.views !== "—" ? (
										<>&nbsp; • &nbsp; {post.views}</>
									) : null}
								</p>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
