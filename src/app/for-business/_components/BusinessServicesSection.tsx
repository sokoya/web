"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import unifiedGateway from "@/assets/icons/unified.svg";
import ironclad from "@/assets/icons/ironclad.svg";
import insights from "@/assets/icons/insights.svg";
import solutions from "@/assets/icons/solutions.svg";

const rows = [
	{
		type: "band",
		icon: unifiedGateway,
		title: "Unified Financial Platform",
		description:
			"Unify your financial operations with Payscribe's comprehensive platform. Simplify your workflow and eliminate the burden of managing multiple financial systems. Experience seamless transactions and maximize your business efficiency.",
	},
	{
		type: "light",
		icon: ironclad,
		title: "Ironclad Security",
		description:
			"At Payscribe, we prioritize the security of your financial data. Our cutting-edge security protocols safeguard your transactions and financial information, providing peace of mind and protecting your business from potential threats.",
	},
	{
		type: "band",
		icon: insights,
		title: "Real-Time Insights",
		description:
			"Stay ahead with Payscribe's real-time access to critical financial data. Gain instant insights and make informed decisions that drive your business forward. Stay ahead of the competition and achieve your growth objectives.",
	},
	{
		type: "light",
		icon: solutions,
		title: "Scalable Solutions",
		description:
			"Payscribe understands the unique needs of businesses at every stage of growth. Our platform adapts to your business size, offering tailored solutions that cater to your specific requirements and long-term goals.",
	},
];
const BusinessServicesSection = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

	const rowMotion = (from: "left" | "right", delay: number) =>
		reducedMotion
			? {}
			: {
					initial: { opacity: 0, x: from === "left" ? -80 : 80 },
					whileInView: { opacity: 1, x: 0 },
					viewport: { once: false, amount: 0.35 },
					transition: { duration: 0.9, ease: smoothEase, delay },
				};

	return (
		<section className='bg-white py-12'>
			<div className='space-y-8'>
				{/* Row 1 — Left-anchored blue, rounded right only */}
				<motion.div {...rowMotion("left", 0.05)} className='flex justify-start'>
					<div className='flex w-[58%] items-center justify-between gap-5 rounded-r-[120px] bg-primary py-9 pl-12 pr-9'>
						<div>
							<h3 className='text-lg font-semibold text-white'>
								Unified Financial Platform
							</h3>
							<p className='mt-3 text-sm leading-relaxed text-[#c5d0ff]'>
								Unify your financial operations with Payscribe's comprehensive
								platform. Simplify your workflow and eliminate the burden of
								managing multiple financial systems. Experience seamless
								transactions and maximize your business efficiency.
							</p>
						</div>
						<Image
							src={unifiedGateway}
							alt='Unified'
							className='h-[120px] w-[120px] object-contain'
						/>
					</div>
				</motion.div>

				{/* Row 2 — Right-anchored light, rounded left only */}
				<motion.div {...rowMotion("right", 0.18)} className='flex justify-end'>
					<div className='flex w-[58%] items-center justify-between gap-5 rounded-l-[120px] bg-[#EEF4FF] py-9 pl-9 pr-12'>
						<Image
							src={ironclad}
							alt='Security'
							className='h-[120px] w-[120px] object-contain'
						/>

						<div>
							<h3 className='text-lg font-semibold text-[#1a2050]'>
								Ironclad Security
							</h3>
							<p className='mt-3 text-sm leading-relaxed text-[#3d4f7a]'>
								At Payscribe, we prioritize the security of your financial data.
								Our cutting-edge security protocols safeguard your transactions
								and financial information, providing peace of mind and
								protecting your business from potential threats.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Row 3 — Left-anchored blue */}
				<motion.div {...rowMotion("left", 0.3)} className='flex justify-start'>
					<div className='flex w-[58%] items-center justify-between gap-5 rounded-r-[120px] bg-primary py-9 pl-12 pr-9'>
						<div>
							<h3 className='text-lg font-semibold text-white'>
								Real-Time Insights
							</h3>
							<p className='mt-3  text-sm leading-relaxed text-[#c5d0ff]'>
								Stay ahead with Payscribe's real-time access to critical
								financial data. Gain instant insights and make informed
								decisions that drive your business forward. Stay ahead of the
								competition and achieve your growth objectives.
							</p>
						</div>

						<Image
							src={insights}
							alt='Insights'
							className='h-[120px] w-[120px] object-contain'
						/>
					</div>
				</motion.div>

				{/* Row 4 — Right-anchored light */}
				<motion.div {...rowMotion("right", 0.42)} className='flex justify-end'>
					<div className='flex w-[58%] items-center justify-between gap-5 rounded-l-[120px] bg-[#EEF4FF] py-9 pl-9 pr-12'>
						<Image
							src={solutions}
							alt='Solutions'
							className='h-[120px] w-[120px] object-contain'
						/>

						<div>
							<h3 className='text-lg font-semibold text-[#1a2050]'>
								Scalable Solutions
							</h3>
							<p className='mt-3 text-sm leading-relaxed text-[#3d4f7a]'>
								Payscribe understands the unique needs of businesses at every
								stage of growth. Our platform adapts to your business size,
								offering tailored solutions that cater to your specific
								requirements. Whether you're a startup or a leading industry
								player, Payscribe provides the scalable flexibility you need to
								thrive and achieve your growth goals.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default BusinessServicesSection;
