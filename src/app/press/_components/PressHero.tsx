"use client";

import Image from "next/image";
import fallbackHeroImg from "@/assets/images/digital.jpg";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

export type PressPost = {
	title: string;
	date: string;
	readTime: string;
	summary: string;
	thumbnail: string;
};

export function PressHero({ post }: { post: PressPost }) {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const heroImg = post.thumbnail?.trim() ? post.thumbnail : fallbackHeroImg;

	return (
		<section className='bg-[#edf4fb] px-6 pb-10 pt-14 sm:pt-20'>
			<div className='mx-auto container'>
				<motion.article
					{...inViewZoom({ reduced: reducedMotion, delay: 0.08, duration: 0.95, amount: 0.3 })}
					className='mt-2 rounded-[22px]'
				>
					<div className='overflow-hidden rounded-[22px]'>
						{typeof heroImg === "string" ? (
							// Remote images may not be configured in next.config, so keep it safe.
							<img
								src={heroImg}
								alt={post.title}
								className='h-[280px] w-full object-cover sm:h-[420px]'
								loading='lazy'
							/>
						) : (
							<Image
								src={heroImg}
								alt={post.title}
								className='h-[280px] w-full object-cover sm:h-[420px]'
								priority
							/>
						)}
					</div>
					<motion.h1
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.9 })}
						className='mt-6 text-xl font-medium leading-tight text-secondary sm:text-2xl'
					>
						{post.title}
					</motion.h1>
					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.85 })}
						className='mt-3 text-base text-slate-500'
					>
						{post.readTime} &nbsp;&middot;&nbsp; {post.date}
					</motion.p>
				</motion.article>
			</div>
		</section>
	);
}

