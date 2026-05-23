"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
	inViewFadeUp,
	inViewFromBottom,
	inViewFromRight,
	subtleFloat,
} from "@/lib/animations";
import styles from "./ToolsSection.module.css";

export function ToolsSection() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='mx-auto py-20 w-full container px-5'>
			<motion.h2
				{...inViewFadeUp({ reduced: reducedMotion, delay: 0.05 })}
				className='text-3xl text-secondary sm:text-4xl font-medium'
			>
				Comprehensive Financial Tools for All Users
			</motion.h2>

			<div className='mt-10 grid gap-6 lg:grid-cols-2 lg:grid-rows-2'>
				{/* For Businesses card */}
				<motion.div
					{...inViewFromBottom({ reduced: reducedMotion, delay: 0.1 })}
					className={`${styles.cardBase} row-span-2 flex flex-col rounded-3xl bg-[#E6F0FF] p-8 text-left text-secondary`}
				>
					<button className='w-fit rounded-full border border-primary/50 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary'>
						FOR BUSINESSES
					</button>
					<h3 className='mt-5 text-xl font-semibold text-primary'>
						Fuel Global Growth with Smarter Financial Tools
					</h3>
					<p className='mt-4 text-sm leading-relaxed text-slate-600'>
						At our core, we are dedicated to powering global growth through
						innovative solutions that simplify transactions, reduce costs, and
						increase financial inclusion. Our commitment is to democratize
						financial services, ensuring that everyone has the opportunity to
						participate in the global economy.
					</p>
					<button
						className={`${styles.ctaButton} mt-6 w-fit rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white`}
					>
						Start accepting payments
					</button>
					<div className='mt-auto pt-8'>
						<motion.div
							{...subtleFloat(reducedMotion)}
							className='flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm'
						>
							<div className='flex items-center gap-3'>
								<div className='grid h-8 w-8 place-items-center rounded-full bg-primary'>
									<svg
										className='h-4 w-4 text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' />
									</svg>
								</div>
								<div>
									<p className='text-base font-bold text-secondary'>₦400,000</p>
									<p className='text-[11px] text-slate-500'>
										You just received payment from Adebisi
									</p>
								</div>
							</div>
							<span className='text-lg font-bold tracking-widest text-slate-400'>
								···
							</span>
						</motion.div>
					</div>
				</motion.div>

				{/* For Freelancers card */}
				<motion.div
					{...inViewFromRight({ reduced: reducedMotion, delay: 0.18 })}
					className={`${styles.cardBase} rounded-3xl bg-primary p-8 text-left text-white`}
				>
					<div className='flex items-center justify-between'>
						<button className='w-fit rounded-full border border-white/30 px-4 py-1.5 text-xs font-bold tracking-wide text-white'>
							FOR FREELANCERS
						</button>
						<motion.div
							{...subtleFloat(reducedMotion, 0.3)}
							className='flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow'
						>
							<div className='h-6 w-6 overflow-hidden rounded-full bg-slate-300'>
								<svg
									className='h-full w-full text-slate-500'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z' />
								</svg>
							</div>
							Tinu paid 🤑
						</motion.div>
					</div>
					<h3 className='mt-5 text-xl font-semibold'>
						Focus on Your Craft, We&apos;ll Handle the Rest!
					</h3>
					<p className='mt-4 text-sm leading-relaxed text-blue-100'>
						Easily track your projects, payments, and expenses with Payscribe
						payment links, invoices. Stay organized and free up your time to
						grow your skills and passion.
					</p>
				</motion.div>

				{/* For Individuals card */}
				<motion.div
					{...inViewFromRight({ reduced: reducedMotion, delay: 0.28 })}
					className={`${styles.cardBase} relative rounded-3xl bg-[#020413] p-8 text-left text-white`}
				>
					<div className='flex items-start justify-between'>
						<button className='w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-white'>
							FOR INDIVIDUALS
						</button>
						<motion.div
							{...subtleFloat(reducedMotion, 0.55)}
							className='rounded-2xl bg-white px-5 py-3 text-secondary shadow-md'
						>
							<div className='flex items-center justify-between gap-6'>
								<div className='flex items-center gap-2'>
									<div className='grid h-8 w-8 place-items-center rounded-full bg-primary'>
										<svg
											className='h-4 w-4 text-white'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' />
										</svg>
									</div>
									<div>
										<p className='text-base font-bold text-secondary'>$4,250</p>
										<p className='text-[11px] text-slate-500'>
											Earned this month
										</p>
									</div>
								</div>
								<span className='self-start text-lg font-bold tracking-widest text-slate-400'>
									···
								</span>
							</div>
						</motion.div>
					</div>
					<h3 className='mt-5 text-xl font-semibold'>
						Take Control of Your Finances.
					</h3>
					<p className='mt-4 text-sm leading-relaxed text-slate-300'>
						Easily manage your finances with Payscribe. Pay recurring bills,
						make both local and international payments. Stay in control!
					</p>
				</motion.div>
			</div>
		</section>
	);
}
