"use client";

import Image from "next/image";
import newsletterBg from "@/assets/images/newsletter-bg.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop, inViewZoom } from "@/lib/animations";

export function BlogNewsletterSection() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white px-5 pb-24'>
			<div className='mx-auto container'>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.06, duration: 0.95, amount: 0.25 })}
					className='relative overflow-hidden rounded-[20px] px-6 py-14 text-white sm:px-10 sm:py-16'
				>
					<Image
						src={newsletterBg}
						alt=''
						fill
						priority={false}
						className='object-cover'
					/>
					<div className='absolute inset-0 bg-[#020413]/35' />

					<div className='relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center'>
						<motion.h3
							{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12, duration: 0.9 })}
							className='text-3xl font-semibold sm:text-5xl'
						>
							Subscribe to our newsletter
						</motion.h3>
						<motion.p
							{...heroDropFromTop({ reduced: reducedMotion, delay: 0.22, duration: 0.85 })}
							className='mt-4 max-w-2xl text-sm text-white/85 sm:text-base'
						>
							Don&apos;t miss out on interesting tips about Payscribe, and how to
							manage your funds.
						</motion.p>

						<motion.form
							{...heroDropFromTop({ reduced: reducedMotion, delay: 0.32, duration: 0.85 })}
							className='mt-8 flex w-full max-w-xl items-center gap-3 rounded-full bg-white/10 p-2 backdrop-blur-md'
							onSubmit={(e) => e.preventDefault()}
						>
							<input
								type='email'
								required
								placeholder='Your email'
								className='h-11 w-full rounded-full bg-transparent px-5 text-sm text-white placeholder:text-white/60 outline-none'
							/>
							<motion.button
								type='submit'
								{...heroCtaPulse(reducedMotion)}
								className='h-11 shrink-0 rounded-full bg-white px-8 text-sm font-semibold text-secondary'
							>
								Subscribe
							</motion.button>
						</motion.form>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

