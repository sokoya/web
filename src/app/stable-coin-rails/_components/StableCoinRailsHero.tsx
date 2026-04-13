"use client";

import Image from "next/image";
import Link from "next/link";
import whiteBg from "@/assets/images/white-bg.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function StableCoinRailsHero() {
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
					Stable Coin Rails
				</motion.p>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.9 })}
					className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'
				>
					Get Paid and Manage Stable Coins with Payscribe
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.9 })}
					className='mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg'
				>
					Payscribe's Stable coin rails enables businesses and developers to integrate stable coin payments, settlements, and treasury operations without building blockchain infrastructure from scratch. Go global, reduce settlement time, and move money instantly — powered by secure, compliant digital currency rails.
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
							className='rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white'
						>
							Get Started
						</motion.span>
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-white/10 px-10 py-3 text-sm font-semibold text-white'
					>
						Contact Support
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
}
