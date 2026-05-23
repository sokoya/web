"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

const steps = [
	{
		number: "1",
		title: "Create and verify your Payscribe account",
		description:
			"Sign up in minutes and complete KYC verification to unlock stablecoin rails, secure wallets, and payout capabilities.",
		bg: "bg-[#E6F0FF]",
	},
	{
		number: "2",
		title: "Generate address",
		description:
			"Generate dedicated stablecoin wallet addresses for your business and start receiving funds instantly from anywhere.",
		bg: "bg-white",
	},
	{
		number: "3",
		title: "Share your address",
		description:
			"Share your deposit address with customers or partners to collect payments globally with transparent settlement.",
		bg: "bg-white",
	},
	{
		number: "4",
		title: "Get paid in USDT or USDC",
		description:
			"Receive payments directly in supported stablecoins and manage treasury operations with confidence and speed.",
		bg: "bg-[#E6F0FF]",
	},
];

export function HowItWorksStable() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto container px-5'>
				<motion.h2
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
					className='mb-10 text-center text-4xl font-semibold text-secondary'
				>
					How It Works.
				</motion.h2>

				<div className='grid grid-cols-1 overflow-hidden rounded-none md:grid-cols-2'>
					{steps.map((step, idx) => (
						<motion.div
							key={step.number}
							{...inViewZoom({
								reduced: reducedMotion,
								delay: 0.08 + idx * 0.12,
								duration: 0.9,
								amount: 0.25,
							})}
							className={`flex min-h-[280px] flex-col items-center justify-center px-10 py-14 text-center ${step.bg}`}
						>
							<p className='text-6xl font-semibold leading-none text-transparent [-webkit-text-stroke:1px_#214dc0]'>
								{step.number}
							</p>
							<h3 className='mt-8 text-2xl font-semibold text-secondary'>
								{step.title}
							</h3>
							<p className='mt-4 max-w-md text-base leading-relaxed text-slate-600'>
								{step.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
