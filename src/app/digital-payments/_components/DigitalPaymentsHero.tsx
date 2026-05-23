"use client";

import Link from "next/link";
import whiteBg from "@/assets/images/white-bg.png";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";
const SIGNUP_URL = "https://app.payscribe.ng/auth/create";
export function DigitalPaymentsHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<main className='business-hero relative flex items-center px-5 py-24 md:py-32'>
			<Image
				src={whiteBg}
				alt='white background'
				className='absolute inset-0'
				fill
				priority
			/>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='relative z-10 mx-auto max-w-3xl text-center'
			>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.1, duration: 0.75 })}
					className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-400'
				>
					PAY OUT WITH EASE
				</motion.p>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.9 })}
					className='mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl'
				>
					Payments, fund transfers, and money management
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.9 })}
					className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'
				>
					Seamlessly handle transactions, move money across accounts, and manage
					funds with ease and security.
				</motion.p>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.38, duration: 0.85 })}
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
						className='rounded-full border border-slate-500 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-slate-100'
					>
						Contact Support
					</Link>
				</motion.div>
			</motion.div>
		</main>
	);
}
