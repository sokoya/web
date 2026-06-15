"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/animations";
import { Check, FileCheck2, Minus, ShieldAlert, ShieldCheck } from "lucide-react";

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
		<section id='regulation' className='bg-[#f7f9fc] px-5 py-16 md:py-24'>
			<div className='container mx-auto overflow-hidden rounded-[2rem] bg-secondary text-white shadow-[0_30px_100px_rgba(2,4,19,0.20)]'>
				<div className='grid gap-0 lg:grid-cols-[0.86fr_1.14fr]'>
					<div className='relative p-6 md:p-10 lg:p-12'>
						<div
							aria-hidden
							className='pointer-events-none absolute inset-0 opacity-[0.10]'
							style={{
								backgroundImage:
									"linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
								backgroundSize: "38px 38px",
							}}
						/>
				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion })}
							className='relative z-10'
				>
							<div className='mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/15 text-blue-200 ring-1 ring-blue-300/20'>
								<FileCheck2 className='h-6 w-6' aria-hidden />
							</div>
							<p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300'>
						Regulatory status
					</p>
							<h2 className='text-3xl font-semibold leading-tight sm:text-4xl'>
								Compliance details that are easy to verify.
					</h2>
							<p className='mt-4 max-w-xl leading-relaxed text-slate-300'>
						Most companies bury this. We&apos;re putting it on the front page —
						because if you&apos;re trusting us with a transfer to family, you
						should be able to check who we are first.
					</p>

							<div className='mt-8 grid gap-3'>
								<div className='rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4'>
									<div className='flex items-start gap-3'>
										<ShieldAlert className='mt-0.5 h-5 w-5 shrink-0 text-amber-200' aria-hidden />
										<div>
											<p className='font-semibold text-amber-100'>
												Applications pending
											</p>
											<p className='mt-1 text-sm leading-relaxed text-amber-50/75'>
												We are not yet open for UK customers. The FCA and HMRC
												statuses below show where the setup process currently
												stands.
											</p>
										</div>
									</div>
								</div>
								<div className='rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4'>
									<div className='flex items-start gap-3'>
										<ShieldCheck className='mt-0.5 h-5 w-5 shrink-0 text-emerald-200' aria-hidden />
										<div>
											<p className='font-semibold text-emerald-100'>
												Narrow UK scope
											</p>
											<p className='mt-1 text-sm leading-relaxed text-emerald-50/75'>
												This UK entity is focused on money remittance between the
												UK and Nigeria.
											</p>
										</div>
									</div>
								</div>
							</div>
				</motion.div>
					</div>

				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion, delay: 0.1 })}
						className='relative overflow-hidden border-t border-white/10 bg-[#081426] p-6 md:p-8 lg:border-l lg:border-t-0'
				>
					<div
						aria-hidden
						className='pointer-events-none absolute inset-0 opacity-[0.07]'
						style={{
							backgroundImage:
								"repeating-linear-gradient(115deg, transparent 0 18px, #FBF8F1 18px 19px), repeating-linear-gradient(25deg, transparent 0 18px, #FBF8F1 18px 19px)",
						}}
					/>

						<div className='relative z-10 mb-8 flex flex-wrap items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5'>
						<div>
								<p className='text-2xl font-semibold tracking-tight text-white'>
								Payscribe Limited
							</p>
							<p className='mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-300'>
								United Kingdom · Money Remittance
							</p>
						</div>
							<div className='rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-amber-200'>
							FCA application in progress
						</div>
					</div>

						<div className='relative z-10 mb-8 grid gap-3 sm:grid-cols-2'>
						{FIELDS.map((field) => (
							<div
								key={field.label}
									className='rounded-2xl border border-white/10 bg-white/[0.04] p-4'
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

						<div className='relative z-10 grid gap-4 sm:grid-cols-2'>
							<div className='rounded-3xl border border-emerald-300/15 bg-emerald-300/10 p-5'>
								<h4 className='text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-emerald-200'>
								What Payscribe Limited does
							</h4>
							<ul className='mt-3 space-y-2 text-sm text-slate-200'>
								{DOES.map((item) => (
									<li key={item} className='flex gap-2'>
											<Check className='mt-0.5 h-4 w-4 shrink-0 text-emerald-200' aria-hidden />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
							<div className='rounded-3xl border border-rose-300/15 bg-rose-300/10 p-5'>
								<h4 className='text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-rose-200'>
								What it doesn&apos;t do
							</h4>
							<ul className='mt-3 space-y-2 text-sm text-slate-200'>
								{DOES_NOT.map((item) => (
									<li key={item} className='flex gap-2'>
											<Minus className='mt-0.5 h-4 w-4 shrink-0 text-rose-200' aria-hidden />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>
				</div>
			</div>
		</section>
	);
}
