"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";

export function ForDevelopersHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<main className='business-hero flex items-center px-5 py-24 md:py-32'>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='mx-auto max-w-3xl text-center'
			>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.1, duration: 0.75 })}
					className='text-xs font-semibold tracking-[0.25em] text-slate-400'
				>
					DESIGNED BY DEVELOPERS FOR DEVELOPERS
				</motion.p>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.9 })}
					className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl'
				>
					Build Powerful Payment Experiences with Payscribe API
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.9 })}
					className='mt-5 text-sm leading-relaxed text-slate-300 md:text-base'
				>
					Have access to tools that will help you to seamlessly integrate secure
					payments, automate financial workflows, and build scalable transaction
					experiences directly into their applications.
				</motion.p>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.38, duration: 0.85 })}
					className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center'
				>
					<motion.button
						type='button'
						{...heroCtaPulse(reducedMotion)}
						className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
					>
						View Documentation
					</motion.button>
					<button className='rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-slate-100'>
						Join Community
					</button>
				</motion.div>
			</motion.div>
		</main>
	);
}
