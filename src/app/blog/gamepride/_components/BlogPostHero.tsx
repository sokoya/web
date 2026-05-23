"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop } from "@/lib/animations";

export function BlogPostHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-[#edf4fb] px-6 pb-10 pt-14 sm:pt-20'>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='mx-auto max-w-4xl text-center text-secondary'
			>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.95 })}
					className='text-2xl font-semibold leading-tight sm:text-4xl'
				>
					How Gamepride Built a Seamless Gaming Experience with Payscribe
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.26, duration: 0.9 })}
					className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base'
				>
					Gamepride is not just a platform; they are a thriving community of gamers
					united by the passion for esports and gaming. Here’s how they partnered
					with Payscribe to simplify financial transactions for gamers.
				</motion.p>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.36, duration: 0.85 })}
					className='mt-5 text-xs text-slate-500 sm:text-sm'
				>
					4 Min &nbsp;&middot;&nbsp; August 19, 2022
				</motion.p>
			</motion.div>
		</section>
	);
}

