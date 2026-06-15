"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/animations";

const FIELDS = [
	{ label: "Companies House Number", value: "17196544" },
	{ label: "Registered Office", value: "12 Beverley Road, Hull, HU5 1LU, UK" },
	{ label: "ICO Registration", value: "ZC155519" },
	{
		label: "HMRC MSB Application",
		value: "Ref. XFML00000221629 — pending",
		pending: true,
	},
	{
		label: "FCA Registration",
		value: "Small Payment Institution — application in progress",
		pending: true,
	},
	{ label: "Regulated Activity", value: "Money remittance (UK ⇄ Nigeria)" },
] as const;

const DOES = [
	"Money remittance between the UK and Nigeria",
	"Foreign exchange as part of that transfer",
	"Both individual and business transfers",
] as const;

const DOES_NOT = [
	"Hold accounts, wallets, or e-money balances",
	"Issue cards or stablecoin products",
	"Lending, investments, or crypto custody",
] as const;

export function UkRegulationPassport() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section id='regulation' className='px-5 py-16 md:py-24'>
			<div className='container mx-auto rounded-3xl bg-secondary px-6 py-12 text-white md:px-10 md:py-16'>
				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion })}
					className='mb-10 max-w-2xl'
				>
					<p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300'>
						Regulatory status
					</p>
					<h2 className='text-3xl font-semibold sm:text-4xl'>
						The paperwork, in plain sight
					</h2>
					<p className='mt-4 text-slate-300'>
						Most companies bury this. We&apos;re putting it on the front page —
						because if you&apos;re trusting us with a transfer to family, you
						should be able to check who we are first.
					</p>
				</motion.div>

				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion, delay: 0.1 })}
					className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1628] p-6 md:p-8'
				>
					<div
						aria-hidden
						className='pointer-events-none absolute inset-0 opacity-[0.07]'
						style={{
							backgroundImage:
								"repeating-linear-gradient(115deg, transparent 0 18px, #FBF8F1 18px 19px), repeating-linear-gradient(25deg, transparent 0 18px, #FBF8F1 18px 19px)",
						}}
					/>

					<div className='relative z-10 mb-8 flex flex-wrap items-start justify-between gap-4'>
						<div>
							<p className='text-2xl font-semibold text-white'>
								Payscribe Limited
							</p>
							<p className='mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-300'>
								United Kingdom · Money Remittance
							</p>
						</div>
						<div className='rotate-1 rounded border border-amber-400/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-amber-300'>
							FCA application in progress
						</div>
					</div>

					<div className='relative z-10 mb-8 grid gap-5 sm:grid-cols-2'>
						{FIELDS.map((field) => (
							<div
								key={field.label}
								className='border-b border-white/10 pb-4'
							>
								<p className='text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-400'>
									{field.label}
								</p>
								<p
									className={`mt-2 text-sm ${
										"pending" in field && field.pending
											? "text-amber-300"
											: "text-white"
									}`}
								>
									{field.value}
								</p>
							</div>
						))}
					</div>

					<div className='relative z-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2'>
						<div>
							<h4 className='text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-emerald-300'>
								What Payscribe Limited does
							</h4>
							<ul className='mt-3 space-y-2 text-sm text-slate-200'>
								{DOES.map((item) => (
									<li key={item} className='flex gap-2'>
										<span className='text-emerald-300'>✓</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className='text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-rose-300'>
								What it doesn&apos;t do
							</h4>
							<ul className='mt-3 space-y-2 text-sm text-slate-200'>
								{DOES_NOT.map((item) => (
									<li key={item} className='flex gap-2'>
										<span className='text-rose-300'>—</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
