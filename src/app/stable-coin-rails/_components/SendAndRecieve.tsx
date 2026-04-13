"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import bg from "@/assets/images/stablecoin-bg.png";
import { heroCtaPulse, heroDropFromTop } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

const SendAndRecieve = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='relative min-h-[380px] overflow-hidden py-20 md:min-h-[420px] md:py-28 lg:py-32'>
			{/* Imported pattern / watermark — sits on top of gradient */}

			<Image src={bg} alt='' fill className='object-cover' sizes='100vw' />

			<div
				className='pointer-events-none absolute inset-0 bg-linear-to-b from-black/0 via-transparent to-black/15'
				aria-hidden
			/>

			<div className='relative z-10 mx-auto max-w-2xl px-5 text-center'>
				<motion.h2
					{...heroDropFromTop({
						reduced: reducedMotion,
						delay: 0.06,
						duration: 0.85,
					})}
					className='text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]'
				>
					Send &amp; receive crypto with ease.
				</motion.h2>
				<motion.p
					{...heroDropFromTop({
						reduced: reducedMotion,
						delay: 0.16,
						duration: 0.85,
					})}
					className='mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg'
				>
					Move stablecoins across borders in minutes, not days. Fund wallets,
					settle with partners, and reconcile flows from one dashboard — built
					for teams that need speed without sacrificing compliance.
				</motion.p>

				<motion.div
					{...heroDropFromTop({
						reduced: reducedMotion,
						delay: 0.26,
						duration: 0.8,
					})}
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
							className='rounded-full bg-white px-10 py-3 text-sm font-semibold text-[#051339]'
						>
							Get Started
						</motion.span>
					</Link>
					<Link
						href='/contact-us'
						className='rounded-full bg-white/15 px-10 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20'
					>
						Contact Us
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default SendAndRecieve;
