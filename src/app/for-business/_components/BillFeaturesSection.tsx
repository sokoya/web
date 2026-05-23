"use client";

import fast from "@/assets/icons/fast.svg";
import stream from "@/assets/icons/bill.svg";
import secure from "@/assets/icons/secure.svg";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function BillFeaturesSection() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	const cards = [
		{
			icon: fast,
			title: "Fast and Hassle-Free Payments",
			description:
				"Make payments with ease and speed. Our service ensures rapid, secure transactions, so you can manage your finance efficiently and stay on top of your bills.",
			bg: "#F1F7FE",
			iconBg: "#B8D6F84D",
		},
		{
			icon: stream,
			title: "Streamlined Bill Management",
			description:
				"Stay organized and in control of your finances. Our service allows you to track and manage all your bills in one place, ensuring you never miss a payment and keeping your finances on track.",
			bg: "#27CC380D",
			iconBg: "#27CC381A",
		},
		{
			icon: secure,
			title: "Secure and Trustworthy Transactions",
			description:
				"Pay your bills with confidence and peace of mind. Our secure and reliable service ensures that every transaction is protected and dependable, giving you complete control over your finances.",
			bg: "#8621C00F",
			iconBg: "#8621C01A",
		},
	];

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto container px-5'>
				<div className='grid gap-6 md:grid-cols-3'>
					{cards.map((card, idx) => (
						<motion.div
							key={card.title}
							initial={reducedMotion ? undefined : { opacity: 0, scale: 0.92, y: 16 }}
							whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
							viewport={{ once: false, amount: 0.35 }}
							transition={{
								duration: 0.8,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.1 + idx * 0.15,
							}}
							className='rounded-3xl p-8 text-center shadow-sm'
							style={{ backgroundColor: card.bg }}
						>
							<div
								className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full'
								style={{ backgroundColor: card.iconBg }}
							>
								<Image
									src={card.icon}
									alt={card.title}
									width={20}
									height={20}
								/>
							</div>
							<h3 className='text-base font-semibold text-secondary md:text-lg'>
								{card.title}
							</h3>
							<p className='mt-3 text-sm leading-relaxed text-slate-600'>
								{card.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
