"use client";

import Image from "next/image";
import whyimg from "@/assets/images/stableImage.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, inViewFromRight, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

const WhyStableCoins = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<div className='container mx-auto grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2'>
			<motion.div
				{...inViewFromRight({
					reduced: reducedMotion,
					delay: 0.06,
					duration: 0.95,
					amount: 0.25,
				})}
			>
				<h2 className='text-3xl font-semibold leading-tight text-secondary'>
					Why Stablecoins with Payscribe?
				</h2>
				<p className='mt-6 text-sm leading-relaxed text-slate-600'>
					Traditional payment systems are slow, expensive, and limited by
					borders. Payscribe unlocks programmable money — allowing your product
					to transact globally with speed and transparency.
				</p>

				<div className='mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2'>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Instant cross-border payments
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Dollar-denominated stability
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Lower transaction costs
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						API-first integration
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary sm:col-span-2'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						24/7 settlement
					</p>
				</div>

				<a
					href={SIGNUP_URL}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex mt-10'
				>
					<motion.span
						{...heroCtaPulse(reducedMotion)}
						className='rounded-full bg-primary px-12 py-4 text-sm font-semibold text-white'
					>
						Get Started
					</motion.span>
				</a>
			</motion.div>

			<motion.div
				{...inViewZoom({
					reduced: reducedMotion,
					delay: 0.12,
					duration: 0.95,
					amount: 0.25,
				})}
			>
				<Image
					src={whyimg}
					alt='why stable coins'
					className='h-full w-full object-contain'
				/>
			</motion.div>
		</div>
	);
};

export default WhyStableCoins;
