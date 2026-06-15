"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/animations";
import { ArrowRight, Building2, Globe2 } from "lucide-react";

const ENTITIES = [
	{
		name: "Payscribe Limited",
		location: "United Kingdom",
		registration: "Company No. 17196544",
		scope: "Applying to offer UK to Nigeria money remittance.",
		audience: "Relevant to UK customers, banking partners, and regulators.",
		active: true,
		icon: Building2,
	},
	{
		name: "Pscribe Digital Services Limited",
		location: "Nigeria",
		registration: "RC1946239",
		scope: "Offers a broader product set to customers in Nigeria.",
		audience: "Separate company and not the provider of UK customer products.",
		active: false,
		icon: Globe2,
	},
] as const;

export function UkEntitySeparation() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section id='scope' className='container mx-auto px-5 py-16 md:py-24'>
			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion })}
				className='mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end'
			>
				<div>
					<p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
						About this page
					</p>
					<h2 className='text-3xl font-semibold text-secondary sm:text-4xl'>
						One brand, clear entity boundaries.
					</h2>
				</div>
				<p className='text-sm leading-relaxed text-slate-600 sm:text-base'>
					The Payscribe name appears in more than one market. This section makes
					clear which company is relevant for UK remittance, and which services
					are outside the UK offer.
				</p>
			</motion.div>

			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion, delay: 0.08 })}
				className='grid gap-5 lg:grid-cols-[1fr_auto_1fr]'
			>
				{ENTITIES.map((entity) => (
					<article
						key={entity.name}
						className={`rounded-3xl border p-6 shadow-sm md:p-7 ${
							entity.active
								? "border-blue-200 bg-white ring-4 ring-blue-50"
								: "border-slate-200 bg-slate-50"
						}`}
					>
						<div className='mb-7 flex items-start justify-between gap-4'>
							<div
								className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
									entity.active
										? "bg-primary text-white"
										: "bg-white text-slate-600 ring-1 ring-slate-200"
								}`}
							>
								<entity.icon className='h-5 w-5' aria-hidden />
							</div>
							<span
								className={`rounded-full px-3 py-1 text-xs font-semibold ${
									entity.active
										? "bg-blue-50 text-primary"
										: "bg-white text-slate-500 ring-1 ring-slate-200"
								}`}
							>
								{entity.active ? "UK page entity" : "Separate Nigerian entity"}
							</span>
						</div>
						<p className='text-sm font-semibold uppercase tracking-[0.12em] text-slate-500'>
							{entity.location}
						</p>
						<h3 className='mt-2 text-2xl font-semibold text-secondary'>
							{entity.name}
						</h3>
						<p className='mt-1 text-sm font-medium text-primary'>
							{entity.registration}
						</p>
						<div className='mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base'>
							<p>{entity.scope}</p>
							<p>{entity.audience}</p>
						</div>
					</article>
				))}

				<div className='hidden items-center justify-center lg:flex'>
					<div className='flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm'>
						<ArrowRight className='h-5 w-5' aria-hidden />
					</div>
				</div>
			</motion.div>

			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion, delay: 0.14 })}
				className='mt-6 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-sm md:p-7'
			>
				Pscribe Digital Services Limited acts as Payscribe Limited&apos;s
				technology and payments infrastructure provider under a services
				agreement, but it is a separate, independently owned company. Its cards,
				stablecoin, and wider Nigeria-market products are not offered to UK
				customers through Payscribe Limited.
			</motion.div>
		</section>
	);
}
