"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/animations";

const STEPS = [
	{
		num: "01",
		title: "Add your recipient",
		description:
			"Enter their name, bank, and account number. We confirm the account belongs to them before you send anything.",
	},
	{
		num: "02",
		title: "See the real cost upfront",
		description:
			"The exchange rate, our fee, and the exact amount they'll receive in Naira — all shown before you confirm.",
	},
	{
		num: "03",
		title: "They get paid, fast",
		description:
			"Once you send the GBP, your recipient receives NGN in their Nigerian bank account — usually within minutes.",
	},
] as const;

export function UkHowItWorks() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section id='how' className='container mx-auto px-5 py-16 md:py-24'>
			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion })}
				className='mb-12 max-w-2xl'
			>
				<p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
					How it works
				</p>
				<h2 className='text-3xl font-semibold text-secondary sm:text-4xl'>
					Three steps, start to finish
				</h2>
				<p className='mt-4 text-slate-600'>
					No accounts, no wallets — just a transfer from your bank to theirs.
				</p>
			</motion.div>

			<div className='grid gap-8 md:grid-cols-3'>
				{STEPS.map((step, index) => (
					<motion.article
						key={step.num}
						{...inViewFadeUp({ reduced: reducedMotion, delay: index * 0.08 })}
						className='border-t-2 border-secondary pt-5'
					>
						<span className='text-xs font-semibold uppercase tracking-[0.1em] text-primary'>
							{step.num}
						</span>
						<h3 className='mt-3 text-xl font-semibold text-secondary'>
							{step.title}
						</h3>
						<p className='mt-2 text-sm leading-relaxed text-slate-600 sm:text-base'>
							{step.description}
						</p>
					</motion.article>
				))}
			</div>
		</section>
	);
}
