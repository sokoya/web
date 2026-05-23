"use client";

import Image from "next/image";
import gamekit from "@/assets/images/gamekit.png";
import whiteBg from "@/assets/images/white-bg.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewFadeUp, inViewZoom } from "@/lib/animations";

const integrations = [
	"Accounts API (Deposit account, Sub accounts)",
	"Collections API (Virtual Nuban, Payments)",
	"Transfers API (NIP transfer, Book transfer)",
	"Bills Payments API",
];

export function GameprideHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='relative overflow-hidden bg-[#050505] text-white'>
			<Image
				src={whiteBg}
				alt='white background'
				className='pointer-events-none absolute top-0 right-0 h-full w-full object-cover'
				fill
				priority
			/>
			{/* Vertical grid lines (match business-hero feel) */}
			<div
				className='pointer-events-none absolute inset-0 opacity-40'
				style={{
					backgroundImage:
						"repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 48px)",
				}}
			/>

			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='relative z-10 mx-auto max-w-2xl px-5 pb-32 pt-20 text-center md:pb-40 md:pt-28'
			>
				{/* Logo: gradient ring + inner dark tile with mark */}
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.12, duration: 0.95, amount: 0.35 })}
					className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-lime-400 to-yellow-400 p-1 shadow-lg md:h-28 md:w-28'
				>
					<div className='flex h-full w-full items-center justify-center rounded-2xl bg-black p-3'>
						<Image
							src={gamekit}
							alt='Gamepride'
							width={56}
							height={56}
							className='h-12 w-12 object-contain md:h-14 md:w-14'
						/>
					</div>
				</motion.div>

				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion, delay: 0.22, duration: 0.8, amount: 0.35 })}
					className='mt-6 flex items-center justify-center gap-2 text-sm text-white/90'
				>
					<svg
						className='h-4 w-4 shrink-0'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
						/>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
						/>
					</svg>
					<span>Nigeria, Madagascar</span>
				</motion.div>

				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion, delay: 0.3, duration: 0.85, amount: 0.3 })}
					className='mt-10 text-left'
				>
					<h2 className='text-center text-base font-semibold text-white'>
						Integrations
					</h2>
					<ul className='mt-4 space-y-2 text-sm text-white/90 md:text-base text-center'>
						{integrations.map((item) => (
							<li key={item} className='flex justify-center gap-2'>
								<span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-white' />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</motion.div>

				<motion.div
					{...inViewFadeUp({ reduced: reducedMotion, delay: 0.38, duration: 0.85, amount: 0.3 })}
					className='mt-10 text-left'
				>
					<h2 className='text-center text-base font-semibold text-white'>
						Product
					</h2>
					<ul className='mt-4 space-y-2 text-sm text-white/90 md:text-base text-center'>
						<li className='flex justify-center gap-2'>
							<span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-white' />
							<span>Virtual Dollar Card API</span>
						</li>
					</ul>
				</motion.div>
			</motion.div>

			{/* White upward-curving arc into next section */}
			<div className='relative z-10 -mb-px h-16 w-full leading-none md:h-24'>
				<svg
					className='block h-full w-full text-white'
					viewBox='0 0 1440 120'
					preserveAspectRatio='none'
					aria-hidden
				>
					<path
						fill='currentColor'
						d='M0,120 V80 Q360,10 720,50 T1440,80 V120 H0Z'
					/>
				</svg>
			</div>
		</section>
	);
}
