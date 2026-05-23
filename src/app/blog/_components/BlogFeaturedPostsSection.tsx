"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import blogImg from "@/assets/images/blog.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

type Category = "All" | "Company" | "Product" | "Finance" | "API";

type FeaturedPost = {
	id: string;
	category: Exclude<Category, "All">;
	tag: string;
	title: string;
	excerpt: string;
	date?: string;
	readTime?: string;
	views: string;
	slug: string;
	coverImageUrl?: string | null;
};

const categories: Category[] = ["All", "Company", "Product", "Finance", "API"];

export function BlogFeaturedPostsSection({
	posts,
}: {
	posts: Array<{
		id: string;
		title: string;
		slug: string;
		excerpt?: string;
		category: Exclude<Category, "All">;
		coverImageUrl?: string | null;
		publishedAt?: string | Date | null;
	}>;
}) {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	const [activeCategory, setActiveCategory] = useState<Category>("All");
	const [page, setPage] = useState(0);

	const featured = useMemo<FeaturedPost[]>(
		() =>
			posts.map((p) => ({
				id: p.id,
				category: p.category,
				tag: p.category,
				title: p.title,
				excerpt: p.excerpt ?? "",
				date: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : "",
				readTime: "",
				views: "—",
				slug: p.slug,
				coverImageUrl: p.coverImageUrl,
			})),
		[posts],
	);

	const filtered = useMemo(() => {
		if (activeCategory === "All") return featured;
		return featured.filter((p) => p.category === activeCategory);
	}, [activeCategory, featured]);

	useEffect(() => {
		setPage(0);
	}, [activeCategory]);

	const pageSize = 3;
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(page, totalPages - 1);
	const visible = filtered.slice(safePage * pageSize, safePage * pageSize + pageSize);

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
							Featured Posts
						</motion.h2>
						<div className='mt-5 flex flex-wrap items-center gap-6 text-sm'>
							{categories.map((cat) => {
								const active = cat === activeCategory;
								return (
									<button
										key={cat}
										type='button'
										onClick={() => setActiveCategory(cat)}
										className={`inline-flex items-center gap-2 transition ${
											active
												? "text-secondary"
												: "text-slate-500 hover:text-secondary"
										}`}
									>
										{active && (
											<span className='h-2 w-2 rounded-full bg-green-500' />
										)}
										{cat}
									</button>
								);
							})}
						</div>
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
						<Link key={post.id} href={`/blog/${post.slug}`} className='block'>
							<motion.article
								{...inViewZoom({
									reduced: reducedMotion,
									delay: 0.08 + idx * 0.1,
									duration: 0.9,
									amount: 0.25,
								})}
								className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
							>
								<div className='relative h-[180px] w-full'>
									{post.coverImageUrl?.trim() ? (
										<Image
											src={post.coverImageUrl}
											alt={post.title}
											fill
											className='object-cover'
											sizes='(min-width: 1024px) 360px, 100vw'
										/>
									) : (
										<Image
											src={blogImg}
											alt={post.title}
											fill
											className='object-cover'
										/>
									)}
								</div>
								<div className='p-6'>
									<p className='text-sm text-slate-500'>
										<span className='mr-2 align-middle text-[10px] text-amber-500'>
											●
										</span>
										{post.tag}
									</p>
									<h3 className='mt-3 text-base font-semibold leading-snug text-secondary'>
										{post.title}
									</h3>
									<p className='mt-3 text-sm leading-relaxed text-slate-500'>
										{post.excerpt}
									</p>
									<p className='mt-5 text-xs text-slate-400'>
										{post.date ? (
											<>
												{post.date} &nbsp; • &nbsp; {post.views}
											</>
										) : (
											post.views
										)}
									</p>
								</div>
							</motion.article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

