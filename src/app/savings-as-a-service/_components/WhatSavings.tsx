"use client";

import Image from "next/image";
import savingsImg from "@/assets/images/savingsImg.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, inViewFromRight, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

const WhatSavings = () => {
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
					What is Savings-as-a-Service?
				</h2>
				<p className='mt-6 text-sm leading-relaxed text-slate-600'>
					Savings-as-a-Service enables you to offer digital savings accounts,
					automated saving tools, and goal-based financial experiences without
					building banking infrastructure from scratch.
				</p>

				<div className='mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2'>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Digital Savings Wallets
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Goal-Based Saving
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Automated Savings
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Flexible withdrawal controls
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary sm:col-span-2'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Smart Fund Management
					</p>
					<p className='flex items-center gap-3 text-sm text-secondary sm:col-span-2'>
						<span className='h-2 w-2 rounded-full bg-secondary' />
						Save in Naira or USD
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
					src={savingsImg}
					alt='savings img'
					className='h-full w-full object-contain'
				/>
			</motion.div>
		</div>
	);
};

export default WhatSavings;
