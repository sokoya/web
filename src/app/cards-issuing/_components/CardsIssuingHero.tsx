"use client";

import Link from "next/link";
import Image from "next/image";
import card from "@/assets/images/card2.png";
import whiteBg from "@/assets/images/white-bg.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function CardsIssuingHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<main className='business-hero relative flex flex-col items-center px-5 pt-12'>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='relative z-10 mx-auto max-w-3xl text-center'
			>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.1, duration: 0.75 })}
					className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'
				>
					Card Issuing
				</motion.p>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.18, duration: 0.9 })}
					className='mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl'
				>
					Issue virtual debit cards easily,
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.28, duration: 0.9 })}
					className='mt-5 text-left text-sm leading-relaxed text-slate-300 md:text-center md:text-base'
				>
					With Payscribe&apos;s virtual card issuing solution, you can
					effortlessly create, manage, and scale commercial virtual debit cards.
					Our platform provides all the tools you need to streamline card
					issuance, making it simple to offer secure, customizable payment
					solutions to your customers.
				</motion.p>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.38, duration: 0.85 })}
					className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'
				>
					<Link
						href={SIGNUP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex'
					>
						<motion.span
							{...heroCtaPulse(reducedMotion)}
							className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg'
						>
							Create Account
						</motion.span>
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full border border-slate-500 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-slate-100'
					>
						Contact Support
					</Link>
				</motion.div>
			</motion.div>
			<Image
				src={card}
				alt='card'
				className='relative z-10 w-[652px] mt-20'
				width={500}
				height={500}
			/>

			<Image
				src={whiteBg}
				alt='whiteBg'
				className='pointer-events-none w-full h-full object-cover absolute top-0 right-0'
				width={500}
				height={500}
			/>
		</main>
	);
}
