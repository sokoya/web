"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";

const steps = [
	{
		number: "1",
		title: "Create Savings Accounts",
		description: "Instantly generate savings wallets for users or businesses.",
		bg: "bg-[#E6F0FF]",
	},
	{
		number: "2",
		title: "Automate Contributions",
		description:
			"Users save manually or automatically through scheduled or rule-based deposits.",
		bg: "bg-white",
	},
	{
		number: "3",
		title: "Track & Manage Funds",
		description: "Users monitor balances, goals, and progress in real time.",
		bg: "bg-white",
	},
	{
		number: "4",
		title: "Withdraw or Reinvest",
		description:
			"Funds can be accessed based on configured rules or saving plans",
		bg: "bg-[#E6F0FF]",
	},
];

export function HowItWorksSavings() {
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

				<div className='grid grid-cols-1 md:grid-cols-2'>
					{steps.map((step, idx) => (
						<motion.div
							key={step.number}
							{...inViewZoom({
								reduced: reducedMotion,
								delay: 0.08 + idx * 0.12,
								duration: 0.9,
								amount: 0.25,
							})}
							className={`flex min-h-[290px] flex-col items-center justify-center px-10 py-14 text-center ${step.bg}`}
						>
							<span className='text-6xl font-semibold leading-none text-transparent [-webkit-text-stroke:2px_#214dc0]'>
								{step.number}
							</span>
							<h3 className='mt-8 text-3xl font-semibold text-secondary'>
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
