"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import blogImg from "@/assets/images/blog.jpg";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

type Category = "All" | "Company" | "Product" | "Finance" | "API" | "Engineering" | "Documentation";

type FeaturedPost = {
	id: string;
	category: Exclude<Category, "All">;
	tag: string;
	title: string;
	excerpt: string;
	date?: string;
	slug: string;
	coverImageUrl?: string | null;
};

const categories: Category[] = ["All", "Company", "Product", "Finance", "API", "Engineering", "Documentation"];

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
				date: p.publishedAt
					? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(p.publishedAt))
					: "",
				slug: p.slug,
				coverImageUrl: p.coverImageUrl,
			})),
		[posts],
	);

	const filtered = useMemo(() => {
		if (activeCategory === "All") return featured;
		return featured.filter((p) => p.category === activeCategory);
	}, [activeCategory, featured]);

	const pageSize = 3;
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(page, totalPages - 1);
	const visible = filtered.slice(safePage * pageSize, safePage * pageSize + pageSize);

	return (
		<section className='bg-white px-5 py-20 sm:py-24'>
			<div className='mx-auto max-w-7xl'>
				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
					className='flex flex-col gap-7'
				>
					<div className='flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
						<div>
						<motion.h2
							{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12, duration: 0.9 })}
							className='text-3xl font-semibold tracking-tight text-secondary sm:text-4xl'
						>
							Latest insights
						</motion.h2>
						<p className='mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base'>
							Product updates, engineering stories, and practical financial guidance from Payscribe.
						</p>
						</div>

						<div className='flex items-center gap-2'>
							<span className='mr-2 text-xs font-medium text-slate-400'>
								{safePage + 1} / {totalPages}
							</span>
							<button
								type='button'
								aria-label='Previous posts'
								onClick={() => setPage((current) => Math.max(0, current - 1))}
								disabled={safePage === 0}
								className='grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-secondary shadow-sm transition hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-35'
							>
								<ChevronLeftIcon className='h-5 w-5' />
							</button>
							<button
								type='button'
								aria-label='Next posts'
								onClick={() => setPage((current) => Math.min(totalPages - 1, current + 1))}
								disabled={safePage >= totalPages - 1}
								className='grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-secondary shadow-sm transition hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-35'
							>
								<ChevronRightIcon className='h-5 w-5' />
							</button>
						</div>
					</div>

					<div className='flex max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
						{categories.map((cat) => {
							const active = cat === activeCategory;
							return (
								<button
									key={cat}
									type='button'
									onClick={() => {
										setActiveCategory(cat);
										setPage(0);
									}}
									className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
										active
											? "border-primary bg-primary text-white shadow-sm"
											: "border-slate-200 bg-white text-slate-500 hover:border-primary/25 hover:text-primary"
									}`}
								>
									{cat}
								</button>
							);
						})}
					</div>
				</motion.div>

				<div className='mt-9 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{visible.map((post, idx) => (
						<Link key={post.id} href={`/blog/${post.slug}`} className='group block h-full'>
							<motion.article
								{...inViewZoom({
									reduced: reducedMotion,
									delay: 0.08 + idx * 0.1,
									duration: 0.9,
									amount: 0.25,
								})}
								className='flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-[0_20px_55px_rgba(33,77,192,0.12)]'
							>
								<div className='relative aspect-[16/10] w-full overflow-hidden bg-slate-100'>
									{post.coverImageUrl?.trim() ? (
										<Image
											src={post.coverImageUrl}
											alt={post.title}
											fill
											className='object-cover transition duration-500 group-hover:scale-[1.03]'
											sizes='(min-width: 1024px) 360px, 100vw'
										/>
									) : (
										<Image
											src={blogImg}
											alt={post.title}
											fill
											className='object-cover transition duration-500 group-hover:scale-[1.03]'
											sizes='(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'
										/>
									)}
									<span className='absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur'>
										{post.tag}
									</span>
								</div>
								<div className='flex flex-1 flex-col p-6 sm:p-7'>
									<h3 className='line-clamp-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-secondary transition group-hover:text-primary'>
										{post.title}
									</h3>
									<p className='mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-500'>
										{post.excerpt || "Read the full story and explore the latest insight from Payscribe."}
									</p>
									<div className='mt-auto flex items-center justify-between border-t border-slate-100 pt-5'>
										<time className='text-xs font-medium text-slate-400'>{post.date || "Payscribe"}</time>
										<span className='inline-flex items-center gap-1.5 text-sm font-semibold text-primary'>
											Read article
											<ArrowUpRightIcon className='h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
										</span>
									</div>
								</div>
							</motion.article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
