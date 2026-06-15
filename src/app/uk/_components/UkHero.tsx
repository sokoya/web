"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop } from "@/lib/animations";
import { CorridorVisual } from "./CorridorVisual";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const TRUST_POINTS = [
	"Live rate before confirmation",
	"Recipient name check",
	"UK entity, UK compliance process",
] as const;

export function UkHero() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section
			className='relative overflow-hidden border-b border-slate-200/70'
			style={{
				background:
					"radial-gradient(circle at 18% 16%, rgba(33,77,192,0.18), transparent 28%), radial-gradient(circle at 82% 12%, rgba(16,185,129,0.14), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #eef5ff 48%, #ffffff 100%)",
			}}
		>
			{!reducedMotion && (
				<motion.div
					className='pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6ea0ff]/18 blur-3xl'
					animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.75, 0.55] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
			)}

			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-[0.45]'
				style={{
					backgroundImage:
						"linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
					backgroundSize: "44px 44px",
				}}
			/>

			<div className='container relative mx-auto grid items-center gap-12 px-5 py-16 md:grid-cols-[1.02fr_0.98fr] md:py-24 lg:gap-16'>
				<div>
					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
						className='mb-5 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur'
					>
						<ShieldCheck className='h-4 w-4' aria-hidden />
						FCA Small Payment Institution — application in progress
					</motion.p>

					<motion.h1
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12 })}
						className='max-w-3xl text-balance text-4xl font-semibold leading-[1.04] text-secondary sm:text-5xl lg:text-6xl'
					>
						UK to Nigeria transfers with the controls people expect from a bank.
					</motion.h1>

					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.2 })}
						className='mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg'
					>
						Payscribe Limited is preparing to launch money remittance between
						the UK and Nigeria — see the live rate and fee before you send,
						and your recipient gets paid in Naira, usually within minutes.
					</motion.p>

					<motion.div
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.25 })}
						className='mt-7 grid max-w-2xl gap-3 sm:grid-cols-3'
					>
						{TRUST_POINTS.map((point) => (
							<div
								key={point}
								className='flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/75 p-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur'
							>
								<CheckCircle2
									className='mt-0.5 h-4 w-4 shrink-0 text-emerald-600'
									aria-hidden
								/>
								<span>{point}</span>
							</div>
						))}
					</motion.div>

					<motion.div
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28 })}
						className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'
					>
						<a
							href='#waitlist'
							className='inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(33,77,192,0.28)] transition hover:-translate-y-0.5 hover:bg-[#173c9c] sm:text-base'
						>
							Get notified at launch
							<ArrowRight className='h-4 w-4' aria-hidden />
						</a>
						<a
							href='#regulation'
							className='inline-flex justify-center rounded-full border border-blue-200 bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 sm:text-base'
						>
							View our regulatory status
						</a>
					</motion.div>

					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.36 })}
						className='mt-5 max-w-2xl text-sm leading-relaxed text-slate-500'
					>
						We&apos;re not yet open for customers. This page exists so anyone —
						regulators, banking partners, or future customers — can see exactly
						what Payscribe Limited does, and where it stands.
					</motion.p>
				</div>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18 })}
				>
					<CorridorVisual />
				</motion.div>
			</div>
		</section>
	);
}
