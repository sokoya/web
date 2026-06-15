"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { inViewZoom } from "@/lib/animations";

export function UkWaitlist() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section
			id='waitlist'
			className='relative overflow-hidden bg-linear-to-r from-[#10379F] to-[#051339] py-16 md:py-20'
		>
			<div className='container relative mx-auto px-5'>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion })}
					className='mx-auto max-w-2xl text-center'
				>
					<h2 className='text-3xl font-bold text-white md:text-4xl'>
						Get notified at launch
					</h2>
					<p className='mt-4 text-sm leading-relaxed text-white/90 md:text-base'>
						We&apos;re not yet open for customers. Leave your details and
						we&apos;ll let you know when UK–Nigeria transfers go live.
					</p>
					<div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
						<Link
							href='/contact-us'
							className='rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary'
						>
							Contact us to join the waitlist
						</Link>
						<a
							href='mailto:complaints@payscribe.co'
							className='rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white'
						>
							complaints@payscribe.co
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
