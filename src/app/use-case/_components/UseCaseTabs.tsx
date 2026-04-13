"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop, inViewFadeUp, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

type UseCaseKey = "Fintech" | "Health" | "Retail" | "Logistics" | "Gaming";

const USE_CASES: {
	key: UseCaseKey;
	title: string;
	subtitle: string;
	points: string[];
	illustration: React.ReactNode;
}[] = [
	{
		key: "Fintech",
		title: "You are one step away from launching your fintech solution.",
		subtitle: "We help you build better Fintech products",
		points: [
			"Use Payscribe's account issuance APIs, digital wallet APIs, and card issuance APIs to go to market faster.",
			"Offer a comprehensive suite of financial services with secure and reliable transactions.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Health",
		title: "Power seamless payments for health platforms.",
		subtitle: "Focus on care while we handle payments",
		points: [
			"Collect consultation fees, subscriptions, and insurance payouts with unified payment rails.",
			"Automate payouts to clinics, pharmacies, and practitioners with clear reporting.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Retail",
		title: "Build shopping experiences your customers love.",
		subtitle: "From checkout to refunds, we've got you covered",
		points: [
			"Accept card, bank transfer, and wallet payments in-store and online.",
			"Manage settlements, refunds, and loyalty payouts from one dashboard.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Logistics",
		title: "Keep deliveries and driver payouts running smoothly.",
		subtitle: "Better cashflow for riders, drivers, and fleets",
		points: [
			"Automate cash-on-delivery reconciliation and wallet top-ups.",
			"Disburse earnings to drivers and partners in real time.",
		],
		illustration: <PhoneIllustration />,
	},
	{
		key: "Gaming",
		title: "Monetize games with seamless, global payments.",
		subtitle: "Focus on gameplay, not payment complexity",
		points: [
			"Accept in-game purchases and subscriptions in multiple currencies.",
			"Pay out to creators, streamers, and partners without friction.",
		],
		illustration: <PhoneIllustration />,
	},
];

const TABS: UseCaseKey[] = [
	"Fintech",
	"Health",
	"Retail",
	"Logistics",
	"Gaming",
];

function PhoneIllustration() {
	return (
		<svg
			viewBox='0 0 120 180'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='w-28 h-44 md:w-36 md:h-56 shrink-0'
			aria-hidden='true'
		>
			{/* Phone body */}
			<rect x='4' y='4' width='112' height='172' rx='18' fill='#2D55C8' />
			{/* Screen */}
			<rect x='16' y='22' width='88' height='118' rx='6' fill='#A8B9F0' />
			{/* Home button */}
			<circle cx='60' cy='158' r='10' fill='white' />
		</svg>
	);
}

const UseCaseTabs = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const [active, setActive] = useState<UseCaseKey>("Fintech");
	const current = USE_CASES.find((c) => c.key === active)!;

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto container px-5'>
				{/* Outer wrapper — light blue-grey background, rounded */}
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.05, duration: 0.95, amount: 0.25 })}
					className='relative overflow-visible rounded-3xl'
				>
					<div className='flex flex-col md:flex-row'>
						{/* ── Left: vertical tab list ── */}
						<motion.div
							{...inViewFadeUp({ reduced: reducedMotion, delay: 0.08, duration: 0.85, amount: 0.35 })}
							className='flex flex-row flex-wrap gap-1 p-4 md:w-[220px] md:shrink-0 md:flex-col md:gap-0 md:p-0 md:pb-8 md:pt-8'
						>
							{TABS.map((tab) => {
								const isActive = tab === active;
								return (
									<button
										key={tab}
										type='button'
										onClick={() => setActive(tab)}
										className={`
											relative z-10 px-6 py-2.5 text-sm font-semibold text-left transition-all duration-200
											rounded-full md:rounded-none
											${
												isActive
													? "bg-primary text-white md:rounded-r-full"
													: "text-[#1a2240] hover:text-primary bg-transparent"
											}
										`}
									>
										{tab}
									</button>
								);
							})}
						</motion.div>

						{/* ── Right: white content card ── */}
						<div className='flex-1 m-4 md:my-6 md:mr-6 md:ml-0'>
							<AnimatePresence mode='wait'>
								<motion.div
									key={active}
									initial={reducedMotion ? undefined : { opacity: 0, y: 12, filter: "blur(6px)" }}
									animate={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
									exit={reducedMotion ? undefined : { opacity: 0, y: -10, filter: "blur(6px)" }}
									transition={
										reducedMotion
											? undefined
											: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
									}
									className='flex h-full flex-col items-start gap-8 rounded-2xl bg-[#214DC00D] px-8 py-10 shadow-sm md:flex-row'
								>
									<div className='flex h-full flex-1 flex-col justify-between'>
										<div>
											<motion.h2
												{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05, duration: 0.85, amount: 0.3 })}
												className='text-2xl font-medium leading-snug text-black md:text-4xl'
											>
												{current.title}
											</motion.h2>
											<motion.p
												{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12, duration: 0.8, amount: 0.3 })}
												className='mt-4 text-sm font-medium text-slate-500'
											>
												{current.subtitle}
											</motion.p>
											<ul className='mt-5 space-y-4'>
												{current.points.map((point, idx) => (
													<motion.li
														key={point}
														{...inViewFadeUp({
															reduced: reducedMotion,
															delay: 0.12 + idx * 0.07,
															duration: 0.7,
															amount: 0.7,
														})}
														// NOTE: whileInView here will be "in" because parent is already visible; keeps motion consistent.
														className='flex items-start gap-3 text-sm leading-relaxed text-slate-600'
													>
														<span className='mt-[5px] h-2 w-2 shrink-0 rounded-full bg-primary' />
														<span>{point}</span>
													</motion.li>
												))}
											</ul>
										</div>

										<div className='mt-8'>
											<Link
												href={SIGNUP_URL}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex'
											>
												<motion.span
													{...heroCtaPulse(reducedMotion)}
													className='inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90'
												>
													Get Started
												</motion.span>
											</Link>
										</div>
									</div>

									<motion.div
										{...inViewZoom({ reduced: reducedMotion, delay: 0.1, duration: 0.85, amount: 0.6 })}
										className='hidden shrink-0 items-center justify-center self-center md:flex'
									>
										{current.illustration}
									</motion.div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default UseCaseTabs;
