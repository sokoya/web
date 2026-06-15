"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop } from "@/lib/animations";
import { CorridorVisual } from "./CorridorVisual";

export function UkHero() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section
			className='relative overflow-hidden'
			style={{
				background:
					"linear-gradient(180deg, #e8f1fc 0%, #f4f8ff 60%, #ffffff 100%)",
			}}
		>
			{!reducedMotion && (
				<motion.div
					className='pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6ea0ff]/20 blur-3xl'
					animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.75, 0.55] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
			)}

			<div className='container relative mx-auto grid items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24'>
				<div>
					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
						className='mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary'
					>
						<span className='inline-block h-2 w-2 rounded-full bg-primary' />
						FCA Small Payment Institution — application in progress
					</motion.p>

					<motion.h1
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12 })}
						className='text-balance text-4xl font-semibold leading-tight text-secondary sm:text-5xl'
					>
						Send money to Nigeria.
						<br />
						Properly <span className='text-primary'>regulated</span>, properly built.
					</motion.h1>

					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.2 })}
						className='mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg'
					>
						Payscribe Limited is preparing to launch money remittance between
						the UK and Nigeria — see the live rate and fee before you send,
						and your recipient gets paid in Naira, usually within minutes.
					</motion.p>

					<motion.div
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28 })}
						className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'
					>
						<a
							href='#waitlist'
							className='inline-flex justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white sm:text-base'
						>
							Get notified at launch
						</a>
						<a
							href='#regulation'
							className='inline-flex justify-center rounded-full bg-blue-100 px-8 py-3.5 text-sm font-semibold text-primary sm:text-base'
						>
							View our regulatory status
						</a>
					</motion.div>

					<motion.p
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.36 })}
						className='mt-5 max-w-lg text-sm text-slate-500'
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
