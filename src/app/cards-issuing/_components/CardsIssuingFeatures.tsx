const features = [
	{
		title: "Customizable",
		description:
			"Design a virtual card issuing solution that reflects your brand identity, seamlessly integrated with our powerful APIs.",
		bg: "bg-[#E8F0FE]",
		iconBg: "bg-blue-100",
		icon: (
			<svg
				className='h-8 w-10 text-primary'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				viewBox='0 0 24 24'
			>
				<rect x='2' y='4' width='20' height='14' rx='2' />
				<path d='M2 10h20' />
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
				className='h-8 w-8 text-green-700'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
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
				className='h-8 w-8 text-purple-700'
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
				<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6l3 3' />
			</svg>
		),
	},
];

import { motion, useReducedMotion } from "framer-motion";
import { inViewZoom } from "@/lib/animations";

export function CardsIssuingFeatures() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto container px-5'>
				<div className='grid gap-8 md:grid-cols-3'>
					{features.map((feature, idx) => (
						<motion.div
							key={feature.title}
							{...inViewZoom({
								reduced: reducedMotion,
								delay: 0.08 + idx * 0.12,
								duration: 0.9,
								amount: 0.35,
							})}
							className={`rounded-2xl p-8 ${feature.bg}`}
						>
							<div
								className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${feature.iconBg}`}
							>
								{feature.icon}
							</div>
							<h3 className='text-xl font-medium text-secondary'>
								{feature.title}
							</h3>
							<p className='mt-4 text-sm leading-relaxed text-slate-600'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
