"use client";

import Image from "next/image";
import Link from "next/link";
import paymentImage from "@/assets/images/paymentImage.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, inViewFromRight, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function WhyUsePaymentLinks() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto grid container grid-cols-1 items-center gap-12 px-5 md:grid-cols-2'>
				<motion.div
					{...inViewFromRight({
						reduced: reducedMotion,
						delay: 0.06,
						duration: 0.95,
						amount: 0.25,
					})}
				>
					<h2 className='text-4xl font-semibold leading-tight text-secondary sm:text-5xl'>
						Why Use Payscribe
						<br />
						Payment Links
					</h2>
					<p className='mt-6 text-lg leading-relaxed text-slate-600'>
						Perfect for businesses, freelancers, creators, and teams who want
						fast, simple payments without complex setup.
					</p>

					<div className='mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2'>
						<p className='flex items-center gap-3 text-xl text-secondary'>
							<span className='h-3 w-3 rounded-full bg-secondary' />
							Instant Setup
						</p>
						<p className='flex items-center gap-3 text-xl text-secondary'>
							<span className='h-3 w-3 rounded-full bg-secondary' />
							Accept Payments Globally
						</p>
						<p className='flex items-center gap-3 text-xl text-secondary'>
							<span className='h-3 w-3 rounded-full bg-secondary' />
							Secure Checkout
						</p>
						<p className='flex items-center gap-3 text-xl text-secondary'>
							<span className='h-3 w-3 rounded-full bg-secondary' />
							Real-Time Tracking
						</p>
						<p className='flex items-center gap-3 text-xl text-secondary sm:col-span-2'>
							<span className='h-3 w-3 rounded-full bg-secondary' />
							Flexible Use Cases
						</p>
					</div>

					<div className='mt-10'>
						<Link
							href={SIGNUP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex'
						>
							<motion.span
								{...heroCtaPulse(reducedMotion)}
								className='inline-flex rounded-full bg-primary px-12 py-4 text-xl font-semibold text-white'
							>
								Get Started
							</motion.span>
						</Link>
					</div>
				</motion.div>

				<motion.div
					{...inViewZoom({
						reduced: reducedMotion,
						delay: 0.12,
						duration: 0.95,
						amount: 0.25,
					})}
					className='flex justify-center md:justify-end'
				>
					<Image
						src={paymentImage}
						alt='Payment links flow'
						className='h-full w-full max-w-xl object-contain'
						priority={false}
					/>
				</motion.div>
			</div>
		</section>
	);
}
