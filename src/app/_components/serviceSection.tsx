"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import service1 from "@/assets/images/service1.png";
import service2 from "@/assets/images/service2.png";
import { inViewFromLeft, inViewFromTop } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

const ServiceSection = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<div className='mt-20  bg-secondary p-5 py-20'>
			<div className='container grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto'>
				<motion.div
					{...inViewFromLeft({
						reduced: reducedMotion,
						delay: 0.1,
						duration: 2.05,
						amount: 0.35,
					})}
					className='bg-[#FFFFFF1A] p-8 hidden rounded-3xl md:flex flex-col gap-20'
				>
					<Image
						src={service1}
						alt='service'
						className='w-full object-contain'
						width={578}
						height={315}
					/>
					<Image
						src={service2}
						alt='service'
						className='w-full object-contain'
						width={578}
						height={460}
					/>
				</motion.div>
				<motion.div
					{...inViewFromTop({
						reduced: reducedMotion,
						delay: 0.5,
						duration: 2.1,
						amount: 0.32,
					})}
					className='flex flex-col gap-12'
				>
					{/* First service block */}
					<div>
						<p className='text-xs font-semibold uppercase tracking-wider text-slate-400'>
							GLOBAL PAYMENT SOLUTIONS
						</p>
						<h2 className='mt-3 text-2xl font-medium text-white'>
							Build, Embed, Launch and Scale Faster With Payscribe API
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-slate-300'>
							With Payscribe API, you gain full access to the tools required to
							integrate smooth payment processes into your app. From creating
							and managing virtual accounts in multiple currencies to making
							payouts to various beneficiaries and receiving payments through
							diverse channels and methods, our API supports your business at
							every step.
						</p>
						<ul className='mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2'>
							{[
								"Whitelabel Solution",
								"Financial Tools",
								"Global Reach",
								"Multiple Payment Options",
								"Rapid Setup",
								"Flexibility",
							].map((item) => (
								<li
									key={item}
									className='flex items-center gap-2 text-sm text-slate-300'
								>
									<span className='h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500' />
									{item}
								</li>
							))}
						</ul>
						<a
							href={SIGNUP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
						>
							Create A Free Account
						</a>
					</div>

					{/* Dotted separator */}
					<div className='border-t my-12 border-dashed border-slate-600' />

					{/* Second service block */}
					<div>
						<p className='text-xs font-semibold uppercase tracking-wider text-slate-400'>
							EASY FINANCIAL MANAGEMENT
						</p>
						<h2 className='mt-3 text-2xl font-medium text-white'>
							Gain Insight into Your Finances with Comprehensive Expense
							Tracking and Detailed Reports
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-slate-300'>
							Take control of your finances with our advanced tracking and
							reporting tools. Understand your spending habits and make informed
							decisions to optimize your budget. Here&apos;s how our features
							can help you:
						</p>
						<ul className='mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2'>
							{[
								"Whitelabel Solution",
								"Financial Tools",
								"Global Reach",
								"Multiple Payment Options",
								"Rapid Setup",
								"Flexibility",
							].map((item) => (
								<li
									key={item}
									className='flex items-center gap-2 text-sm text-slate-300'
								>
									<span className='h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500' />
									{item}
								</li>
							))}
						</ul>
						<a
							href={SIGNUP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
						>
							Create A Free Account
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ServiceSection;
