"use client";

import whiteBg from "@/assets/images/white-bg.png";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
const SIGNUP_URL = "https://app.payscribe.ng/auth/create";
export function ForBusinessHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<main className='business-hero relative flex items-center overflow-hidden px-5 py-24 md:py-32'>
			<motion.div
				initial={reducedMotion ? undefined : { opacity: 0, y: -26 }}
				whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.45 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className='relative z-10 mx-auto max-w-3xl text-center'
			>
				<motion.p
					initial={reducedMotion ? undefined : { opacity: 0, y: -18 }}
					whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.55 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
					className='text-xs font-semibold tracking-[0.25em] text-slate-400'
				>
					UNLOCK YOUR BUSINESS POTENTIAL WITH PAYSCRIBE
				</motion.p>
				<motion.h1
					initial={reducedMotion ? undefined : { opacity: 0, y: -22 }}
					whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.55 }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
					className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'
				>
					Expert Financial Solutions Crafted for Ambitious Businesses Like
					Yours.
				</motion.h1>
				<motion.p
					initial={reducedMotion ? undefined : { opacity: 0, y: -18 }}
					whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.55 }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
					className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'
				>
					Payscribe empowers you with secure transactions, cutting-edge
					management tools, and effortless financial integrations. Streamline
					your operations, amplify efficiency, and drive sustainable growth —
					giving you the competitive advantage to succeed and thrive in
					today&apos;s fast-paced market.
				</motion.p>

				<motion.div
					initial={reducedMotion ? undefined : { opacity: 0, y: -14 }}
					whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.55 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
					className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center'
				>
					<Link
						href={SIGNUP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex'
					>
						<motion.span
						animate={
							reducedMotion
								? undefined
								: {
										scale: [1, 1.03, 1],
										boxShadow: [
											"0 0 0 rgba(33,77,192,0)",
											"0 18px 42px rgba(33,77,192,0.35)",
											"0 0 0 rgba(33,77,192,0)",
										],
									}
						}
						transition={
							reducedMotion
								? undefined
								: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
						}
						className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
					>
						Create A Free Account
						</motion.span>
					</Link>
					<Link
						href='/book-a-demo'
						className='rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-slate-100'
					>
						Book a Demo
					</Link>
				</motion.div>
			</motion.div>
			<Image
				src={whiteBg}
				alt='whiteBg'
				className='pointer-events-none absolute top-0 right-0 h-full w-full object-cover'
				width={500}
				height={500}
			/>
		</main>
	);
}
