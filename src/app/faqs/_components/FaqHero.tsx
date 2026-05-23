"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function FaqHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<main className='relative overflow-hidden bg-white px-5 py-20 md:py-28'>
			{/* Subtle bottom gradient */}
			<div
				className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-blue-50/50 to-transparent'
				aria-hidden
			/>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='relative mx-auto max-w-2xl text-center'
			>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.9 })}
					className='text-3xl font-bold text-secondary sm:text-4xl'
				>
					Frequently Asked Questions
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.24, duration: 0.9 })}
					className='mt-4 text-base text-slate-500 md:text-lg'
				>
					Go through our FAQs to find the answer you&apos;re looking for.
				</motion.p>
				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.34, duration: 0.85 })}
					className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'
				>
					<Link
						href={SIGNUP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex'
					>
						<motion.span
							{...heroCtaPulse(reducedMotion)}
							className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
						>
							Create Account
						</motion.span>
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-blue-50 px-8 py-3 text-sm font-semibold text-primary'
					>
						Contact Support
					</Link>
				</motion.div>
			</motion.div>
		</main>
	);
}
