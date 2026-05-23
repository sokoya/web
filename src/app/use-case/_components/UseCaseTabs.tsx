"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
	heroCtaPulse,
	heroDropFromTop,
	inViewFadeUp,
	inViewZoom,
} from "@/lib/animations";
import {
	GamingIllustration,
	HealthIllustration,
	LogisticsIllustration,
	PhoneIllustration,
	RetailIllustration,
} from "./illustrations";

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
		title: "Innovative solution for health services.",
		subtitle: "We help you build and enhance health tech products.",
		points: [
			"Leverage Payscribe's bank accounts integration API for seamless health insurance premium management.",
			"Implement Payscribe's savings feature for efficient health savings plans.",
			"Integrate the card issuance API for convenient health service payments.",
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
		illustration: <HealthIllustration />,
	},
	{
		key: "Retail",
		title: "Enhance your customers' retail experiences.",
		subtitle: "We help you build and enhance better Retail products.",
		points: [
			"Implement Payscribe's digital wallet APIs to provide customers with a convenient payment option.",
			"Integrate Payscribe's card issuance APIs to issue branded cards for smoother transactions.",
		],
		illustration: <RetailIllustration />,
	},
	{
		key: "Logistics",
		title: "Efficient logistics operations.",
		subtitle: "We help you build and enhance your Logistics products",
		points: [
			"Use Payscribe's branded programmable cards API to simplify operations for riders and drivers.",
			"Enable secure and efficient transactions with Payscribe's Digital Wallet APIs.",
		],
		illustration: <LogisticsIllustration />,
	},
	{
		key: "Gaming",
		title: "You are one step away from integrating our fintech solution.",
		subtitle: "We help you build better payment solution for your gaming idea",
		points: [
			"Use Payscribe's account issuance APIs, digital wallet APIs, and card Issuance APIs to go to market faster.",
			"Offer a comprehensive suite of financial services with secure and reliable transactions.",
		],
		illustration: <GamingIllustration />,
	},
];

const TABS: UseCaseKey[] = [
	"Fintech",
	"Health",
	"Retail",
	"Logistics",
	"Gaming",
];

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
					{...inViewZoom({
						reduced: reducedMotion,
						delay: 0.05,
						duration: 0.95,
						amount: 0.25,
					})}
					className='relative overflow-visible rounded-3xl'
				>
					<div className='flex flex-col md:flex-row'>
						{/* ── Left: vertical tab list ── */}
						<motion.div
							{...inViewFadeUp({
								reduced: reducedMotion,
								delay: 0.08,
								duration: 0.85,
								amount: 0.35,
							})}
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
									initial={
										reducedMotion
											? undefined
											: { opacity: 0, y: 12, filter: "blur(6px)" }
									}
									animate={
										reducedMotion
											? undefined
											: { opacity: 1, y: 0, filter: "blur(0px)" }
									}
									exit={
										reducedMotion
											? undefined
											: { opacity: 0, y: -10, filter: "blur(6px)" }
									}
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
												{...heroDropFromTop({
													reduced: reducedMotion,
													delay: 0.05,
													duration: 0.85,
													amount: 0.3,
												})}
												className='text-2xl font-medium leading-snug text-black md:text-4xl'
											>
												{current.title}
											</motion.h2>
											<motion.p
												{...heroDropFromTop({
													reduced: reducedMotion,
													delay: 0.12,
													duration: 0.8,
													amount: 0.3,
												})}
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
										{...inViewZoom({
											reduced: reducedMotion,
											delay: 0.1,
											duration: 0.85,
											amount: 0.6,
										})}
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
