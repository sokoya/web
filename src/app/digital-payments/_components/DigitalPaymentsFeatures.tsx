"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewZoom } from "@/lib/animations";

const features = [
	{
		title: "Customizable",
		description:
			"Design a virtual card issuing solution that reflects your brand identity, seamlessly integrated with our powerful APIs",
		bg: "bg-[#E8F0FE]",
		iconBg: "bg-blue-100",
		icon: (
			<svg
				className='h-6 w-6 text-primary'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				viewBox='0 0 24 24'
			>
				<rect x='3' y='6' width='18' height='12' rx='2' />
				<path d='M3 10h18' />
				<path d='M7 15h4' />
			</svg>
		),
	},
	{
		title: "Robust Security You Can Trust",
		description:
			"Protect your business from day one with advanced fraud prevention, powered by our strong banking partnerships and deep regulatory expertise.",
		bg: "bg-[#E6F4EA]",
		iconBg: "bg-green-100",
		icon: (
			<svg
				className='h-6 w-6 text-green-700'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z'
				/>
			</svg>
		),
	},
	{
		title: "Maximize Revenue Potential",
		description:
			"Earn more with every card transaction by sharing in the processing fees, boosting your profitability effortlessly.",
		bg: "bg-[#F3E8FD]",
		iconBg: "bg-purple-100",
		icon: (
			<svg
				className='h-6 w-6 text-purple-700'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
];

export function DigitalPaymentsFeatures() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto max-w-6xl px-5'>
				<div className='grid gap-6 md:grid-cols-3 md:gap-8'>
					{features.map((feature, idx) => (
						<motion.div
							key={feature.title}
							{...inViewZoom({
								reduced: reducedMotion,
								delay: 0.08 + idx * 0.12,
								duration: 0.92,
								amount: 0.35,
							})}
							className={`rounded-2xl p-10 text-center ${feature.bg}`}
						>
							<div
								className={`mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full ${feature.iconBg}`}
							>
								{feature.icon}
							</div>
							<h3 className='text-base font-semibold text-secondary'>
								{feature.title}
							</h3>
							<p className='mx-auto mt-4 max-w-sm text-sm leading-relaxed text-slate-600'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

