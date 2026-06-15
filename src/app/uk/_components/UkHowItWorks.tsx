"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/animations";
import { BadgeCheck, BanknoteArrowDown, Landmark } from "lucide-react";

const STEPS = [
	{
		num: "01",
		icon: BadgeCheck,
		title: "Add your recipient",
		description:
			"Enter their name, bank, and account number. We confirm the account belongs to them before you send anything.",
		meta: "Name match before payment",
	},
	{
		num: "02",
		icon: BanknoteArrowDown,
		title: "See the real cost upfront",
		description:
			"The exchange rate, our fee, and the exact amount they'll receive in Naira — all shown before you confirm.",
		meta: "Rate, fee, payout shown",
	},
	{
		num: "03",
		icon: Landmark,
		title: "They get paid, fast",
		description:
			"Once you send the GBP, your recipient receives NGN in their Nigerian bank account — usually within minutes.",
		meta: "Bank-to-bank payout",
	},
] as const;

export function UkHowItWorks() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section id='how' className='bg-white'>
			<div className='container mx-auto px-5 py-16 md:py-24'>
			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion })}
				className='mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end'
			>
				<div className='max-w-2xl'>
					<p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
						How it works
					</p>
					<h2 className='text-3xl font-semibold text-secondary sm:text-4xl'>
						A simple flow with fewer unknowns.
					</h2>
				</div>
				<p className='max-w-md text-sm leading-relaxed text-slate-600 sm:text-base'>
					No stored balances, no wallet detours. A transfer moves from your UK
					bank account to their Nigerian bank account with the important checks
					shown before you commit.
				</p>
			</motion.div>

			<div className='grid gap-5 md:grid-cols-3'>
				{STEPS.map((step, index) => (
					<motion.article
						key={step.num}
						{...inViewFadeUp({ reduced: reducedMotion, delay: index * 0.08 })}
						className='group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]'
					>
						<div className='mb-8 flex items-center justify-between'>
							<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_12px_28px_rgba(33,77,192,0.25)]'>
								<step.icon className='h-5 w-5' aria-hidden />
							</div>
							<span className='rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary ring-1 ring-slate-200'>
								{step.num}
							</span>
						</div>
						<p className='mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700'>
							{step.meta}
						</p>
						<h3 className='text-xl font-semibold text-secondary'>
							{step.title}
						</h3>
						<p className='mt-2 text-sm leading-relaxed text-slate-600 sm:text-base'>
							{step.description}
						</p>
					</motion.article>
				))}
			</div>

			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion, delay: 0.14 })}
				className='mt-6 rounded-3xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-relaxed text-slate-700 sm:p-6'
			>
				<span className='font-semibold text-secondary'>Launch note:</span>{" "}
				Payscribe Limited is still preparing to open for customers. The flow
				above describes the intended customer experience once the UK remittance
				service goes live.
			</motion.div>
			</div>
		</section>
	);
}
