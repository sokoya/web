"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewFadeUp, inViewZoom } from "@/lib/animations";

import { faqs } from "./faqData";


export function FaqAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto max-w-4xl px-5'>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.05, duration: 0.9, amount: 0.25 })}
					className='divide-y divide-slate-200 rounded-2xl border-b border-slate-200 bg-white'
				>
					{faqs.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<motion.button
								key={item.question}
								type='button'
								onClick={() => setOpenIndex(isOpen ? null : index)}
								{...inViewFadeUp({
									reduced: reducedMotion,
									delay: 0.08 + index * 0.03,
									duration: 0.65,
									amount: 0.6,
								})}
								className='flex w-full flex-col items-stretch text-left'
							>
								<div className='flex items-center justify-between px-6 py-4'>
									<span className='text-sm font-medium text-secondary sm:text-base'>
										{item.question}
									</span>
									<span className='ml-4 shrink-0 text-xl font-semibold text-primary'>
										{isOpen ? "−" : "+"}
									</span>
								</div>
								{isOpen && (
									<div className='px-6 pb-5 text-sm leading-relaxed text-slate-600'>
										{item.answer}
									</div>
								)}
							</motion.button>
						);
					})}
				</motion.div>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12, duration: 0.85 })}
					className='mt-10 rounded-2xl bg-blue-50 px-6 py-5 text-center'
				>
					<p className='text-sm text-slate-700'>
						Got more questions? Email us at{" "}
						<a
							href='mailto:hello@payscribe.ng'
							className='font-semibold text-primary underline underline-offset-2'
						>
							hello@payscribe.ng
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
