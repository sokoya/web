"use client";

import Image from "next/image";
import Link from "next/link";
import fintech from "@/assets/icons/fintech.svg";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, inViewFromRight, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

const FintechSection = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto container px-5'>
				<div className='flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#E8F0FE] px-8 py-10 md:flex-row md:px-12'>
					<motion.div
						{...inViewFromRight({
							reduced: reducedMotion,
							delay: 0.06,
							duration: 0.95,
							amount: 0.25,
						})}
						className='max-w-xl'
					>
						<p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
							Fintech
						</p>
						<h2 className='mt-3 text-2xl font-semibold text-primary sm:text-4xl'>
							Empowering Fintech Innovators.
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-slate-600 md:text-base'>
							In the fast-paced world of fintech, we&apos;ve partnered with
							trailblazers to power their financial services. From digital
							wallets and lending platforms to cross-border payments, Payscribe
							provides the rails that help them launch, scale, and stay
							compliant.
						</p>
						<div className='mt-8'>
							<Link
								href={SIGNUP_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex'
							>
								<motion.span
									{...heroCtaPulse(reducedMotion)}
									className='inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
								>
									Get Started
								</motion.span>
							</Link>
						</div>
					</motion.div>

					<motion.div
						{...inViewZoom({
							reduced: reducedMotion,
							delay: 0.12,
							duration: 0.95,
							amount: 0.25,
						})}
						className='flex justify-center md:justify-end'
					>
						<Image
							src={fintech}
							alt='Fintech icon'
							className='h-[300px] w-[300px] object-contain'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FintechSection;
