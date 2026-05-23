"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
	heroDropFromTop,
	inViewFadeUp,
	inViewFromRight,
	inViewZoom,
} from "@/lib/animations";

import transfer1 from "@/assets/images/lending.png";
import transfer2 from "@/assets/images/payrol.png";
import wallet from "@/assets/images/marketplace.png";
import map from "@/assets/images/mobility.png";
import digital from "@/assets/images/digital-payment.png";

type TabKey =
	| "Lending"
	| "Payroll"
	| "Marketplace"
	| "Mobility"
	| "Digital Payments";

const TABS: TabKey[] = [
	"Lending",
	"Payroll",
	"Marketplace",
	"Mobility",
	"Digital Payments",
];

const CONTENT: Record<
	TabKey,
	{ title: string; description: string; image: StaticImageData }
> = {
	Lending: {
		title: "Lending",
		description:
			"Use Payscribe Payout API to automate loan disbursements directly to borrowers' accounts. With instant, secure payouts, you can ensure that borrowers receive their funds without delay, improving customer satisfaction and accelerating the lending process.",
		image: transfer1,
	},
	Payroll: {
		title: "Payroll",
		description:
			"Integrate Payscribe Payout API into your payroll system to instantly pay employees, contractors, or freelancers. Set up automated salary transfers in any currency, ensuring timely, hassle-free payments that keep your workforce happy and productive",
		image: transfer2,
	},
	Marketplace: {
		title: "Marketplace",
		description:
			"Empower your marketplace by integrating Payscribe Payout API to automate vendor payments. Instantly pay your sellers, whether it’s for commissions, earnings, or refunds, all through a simple, secure, and scalable payout system that helps grow your platform.",
		image: map,
	},
	Mobility: {
		title: "Mobility",
		description:
			"Integrate Payscribe Payout API to instantly pay your drivers, delivery personnel, or service providers as they complete their tasks. This ensures real-time, hassle-free payouts that enhance efficiency and support the fast-paced demands of the mobility industry.",
		image: wallet,
	},
	"Digital Payments": {
		title: "Digital Payments",
		description:
			"Leverage Payscribe Payout API to streamline digital payments by instantly transferring funds to users, merchants, or service providers. With seamless integration, you can offer fast, secure payouts across borders, boosting your payment platform’s reliability and user satisfaction.",
		image: digital,
	},
};

export function DigitalPaymentsExplore() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const [active, setActive] = useState<TabKey>("Lending");
	const activeContent = useMemo(() => CONTENT[active], [active]);

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto max-w-6xl px-5'>
				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
					className='mx-auto max-w-4xl text-center'
				>
					<motion.p
						{...heroDropFromTop({
							reduced: reducedMotion,
							delay: 0.1,
							duration: 0.75,
						})}
						className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'
					>
						Explore
					</motion.p>
					<motion.h2
						{...heroDropFromTop({
							reduced: reducedMotion,
							delay: 0.18,
							duration: 0.9,
						})}
						className='mt-3 text-2xl font-semibold text-secondary sm:text-3xl md:text-4xl'
					>
						Payscribe offers virtual debit cards designed to cater to diverse
						business models and industries.
					</motion.h2>
				</motion.div>

				<motion.div
					{...inViewFadeUp({
						reduced: reducedMotion,
						delay: 0.08,
						duration: 0.85,
						amount: 0.35,
					})}
					className='mt-10 flex flex-wrap items-center justify-center gap-2'
				>
					<div className='flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-50 p-2 ring-1 ring-slate-200'>
						{TABS.map((tab) => {
							const isActive = tab === active;
							return (
								<button
									key={tab}
									type='button'
									onClick={() => setActive(tab)}
									className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
										isActive
											? "bg-white text-primary shadow-sm"
											: "text-slate-600 hover:text-secondary"
									}`}
								>
									{tab}
								</button>
							);
						})}
					</div>
				</motion.div>

				<div className='mt-12 grid items-center gap-10 lg:grid-cols-2'>
					<motion.div
						{...inViewZoom({
							reduced: reducedMotion,
							delay: 0.12,
							duration: 0.95,
							amount: 0.25,
						})}
						className='relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm'
					>
						<AnimatePresence mode='wait'>
							<motion.div
								key={active}
								initial={
									reducedMotion ? undefined : { opacity: 0, scale: 0.985 }
								}
								animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
								exit={reducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
								transition={
									reducedMotion
										? undefined
										: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
								}
							>
								<Image
									src={activeContent.image}
									alt={activeContent.title}
									className='h-[341px] w-full object-cover'
									priority={false}
								/>
							</motion.div>
						</AnimatePresence>
					</motion.div>

					<motion.div
						{...inViewFromRight({
							reduced: reducedMotion,
							delay: 0.18,
							duration: 0.92,
							amount: 0.25,
						})}
					>
						<AnimatePresence mode='wait'>
							<motion.div
								key={active}
								initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
								animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
								exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
								transition={
									reducedMotion
										? undefined
										: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
								}
							>
								<h3 className='text-2xl font-semibold text-secondary'>
									{activeContent.title}
								</h3>
								<p className='mt-4 text-sm leading-relaxed text-slate-600 md:text-base'>
									{activeContent.description}
								</p>
								<div className='mt-8'>
									<Link
										href='/contact-us'
										className='inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white'
									>
										Contact Us
									</Link>
								</div>
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
