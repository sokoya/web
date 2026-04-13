"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import map from "@/assets/images/map.png";
import { inViewFadeUp, inViewFromTop, inViewZoom } from "@/lib/animations";
import map1 from "@/assets/icons/map1.svg";
import map2 from "@/assets/icons/map2.svg";
import map3 from "@/assets/icons/map3.svg";
import map4 from "@/assets/icons/map4.svg";
import map5 from "@/assets/icons/map5.svg";

const OneAccountSection = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const benefits = [
		{ label: "Receive International Payments", icon: map1 },
		{ label: "Unified Financial Control", icon: map2 },
		{ label: "Hold Multiple Currencies", icon: map3 },
		{ label: "Faster international settlements", icon: map4 },
		{ label: "Send Cross-Border Transfers", icon: map5 },
	];

	return (
		<div className='bg-primary/10 p-5 py-20'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
				<motion.div {...inViewFromTop({ reduced: reducedMotion, delay: 0.1 })}>
					<motion.h2
						{...inViewFromTop({
							reduced: reducedMotion,
							delay: 0.18,
							duration: 0.95,
						})}
						className='text-5xl font-semibold text-secondary'
					>
						One Account,
						<br /> Global Possibilities.
					</motion.h2>
					<motion.p
						{...inViewFromTop({
							reduced: reducedMotion,
							delay: 0.28,
							duration: 0.95,
						})}
						className='mt-4 text-base leading-relaxed text-slate-600'
					>
						Payscribe’s Global Account gives your business the ability to send,
						receive, and manage money across countries from a single unified
						account.
					</motion.p>
					<div className='grid grid-cols-2 gap-2 mt-6 '>
						{benefits.map((item, index) => (
							<motion.div
								key={index}
								{...inViewFadeUp({
									reduced: reducedMotion,
									delay: 0.34 + index * 0.06,
									duration: 0.8,
									amount: 0.25,
								})}
								className='flex items-center gap-2'
							>
								<div className='w-10 h-10 bg-[#214DC01A] rounded-full flex items-center justify-center'>
									<Image
										src={item.icon}
										alt={item.label}
										className='object-contain'
										width={16}
										height={16}
									/>
								</div>
								<p className='text-sm text-secondary'>{item.label}</p>
							</motion.div>
						))}
					</div>
					<motion.button
						{...inViewFadeUp({
							reduced: reducedMotion,
							delay: 0.68,
							duration: 0.85,
						})}
						className='mt-6 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white'
					>
						Get Started
					</motion.button>
				</motion.div>
				<motion.div
					{...inViewZoom({
						reduced: reducedMotion,
						delay: 0.28,
						duration: 1.0,
					})}
				>
					<Image
						src={map}
						alt='map'
						width={500}
						className='w-full'
						height={500}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default OneAccountSection;
