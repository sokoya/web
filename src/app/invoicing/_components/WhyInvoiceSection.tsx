"use client";

import Image from "next/image";
import Link from "next/link";
import invoiceImage from "@/assets/images/invoiceImage.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, inViewFromRight, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function WhyInvoiceSection() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2'>
				<motion.div
					{...inViewFromRight({
						reduced: reducedMotion,
						delay: 0.06,
						duration: 0.95,
						amount: 0.25,
					})}
				>
					<h2 className='text-3xl font-semibold leading-tight text-secondary sm:text-4xl'>
						Why Payscribe Invoicing
					</h2>
					<p className='mt-6 text-base leading-relaxed text-slate-600'>
						Managing invoices shouldn&apos;t slow your business down. Payscribe
						gives you powerful tools to bill clients professionally while
						automating payment collection.
					</p>

					<div className='mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2'>
						<p className='flex items-start gap-3 text-base text-secondary'>
							<span className='mt-[10px] h-2.5 w-2.5 rounded-full bg-secondary' />
							<span>Send invoices in seconds</span>
						</p>
						<p className='flex items-start gap-3 text-base text-secondary'>
							<span className='mt-[10px] h-2.5 w-2.5 rounded-full bg-secondary' />
							<span>Accept payments directly from invoices</span>
						</p>
						<p className='flex items-start gap-3 text-base text-secondary'>
							<span className='mt-[10px] h-2.5 w-2.5 rounded-full bg-secondary' />
							<span>Reduce late payments</span>
						</p>
						<p className='flex items-start gap-3 text-base text-secondary'>
							<span className='mt-[10px] h-2.5 w-2.5 rounded-full bg-secondary' />
							<span>Track payment status in real time</span>
						</p>
						<p className='flex items-start gap-3 text-base text-secondary sm:col-span-2'>
							<span className='mt-[10px] h-2.5 w-2.5 rounded-full bg-secondary' />
							<span>Manage everything from one dashboard</span>
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
								className='inline-flex rounded-full bg-primary px-12 py-4 text-base font-semibold text-white'
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
						src={invoiceImage}
						alt='Invoice creation preview'
						className='h-full w-full max-w-xl object-contain'
						priority={false}
					/>
				</motion.div>
			</div>
		</section>
	);
}

