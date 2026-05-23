"use client";

import Image from "next/image";
import Link from "next/link";
import whiteBg from "@/assets/images/white-bg.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";

export function PrivacyPolicyHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='business-hero relative overflow-hidden'>
			<Image
				src={whiteBg}
				alt='white background'
				className='pointer-events-none absolute top-0 right-0 h-full w-full object-cover'
				fill
				priority
			/>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='relative z-10 mx-auto max-w-4xl px-5 py-24 text-center text-white md:py-32'
			>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.1, duration: 0.75 })}
					className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'
				>
					Privacy Policy
				</motion.p>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.9 })}
					className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'
				>
					Privacy Policy for Payscribe
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.9 })}
					className='mt-4 text-base text-slate-300 md:text-lg'
				>
					Read below our Privacy Policies
				</motion.p>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.38, duration: 0.85 })}
					className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'
				>
					<Link href='#privacy-content' className='inline-flex'>
						<motion.span
							{...heroCtaPulse(reducedMotion)}
							className='rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white'
						>
							Get Started
						</motion.span>
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-white/10 px-10 py-3 text-sm font-semibold text-white'
					>
						Reach out to us
					</Link>
				</motion.div>
			</motion.div>

			<div className='relative z-10 -mb-px h-16 w-full leading-none md:h-24'>
				<svg
					className='block h-full w-full text-white'
					viewBox='0 0 1440 120'
					preserveAspectRatio='none'
					aria-hidden
				>
					<path
						fill='currentColor'
						d='M0,120 V80 Q360,10 720,50 T1440,80 V120 H0Z'
					/>
				</svg>
			</div>
		</section>
	);
}
