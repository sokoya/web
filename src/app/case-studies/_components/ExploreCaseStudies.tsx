"use client";

import Image from "next/image";
import Link from "next/link";
import connekt from "@/assets/images/connekit.png";
import gamekit from "@/assets/images/gamekit.png";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop, inViewZoom } from "@/lib/animations";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

const cards = [
	{
		image: gamekit,
		title: "Gamepride",
		description: "Level up your gaming experience, win cash rewards!",
		bg: "bg-[#E6F8F0]",
		buttonBg: "bg-[#00C853]",
		href: "/case-studies/gamepride",
	},
	{
		image: connekt,
		title: "Connekit-eo",
		description: "ISP and dashboard virtual IA assistance issuance.",
		bg: "bg-[#E6F7FB]",
		buttonBg: "bg-[#00ACC1]",
		href: "/contact-us",
	},
];

const ExploreCaseStudies = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-20'>
			<div className='mx-auto container px-5'>
				<motion.h2
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
					className='text-left text-2xl font-semibold text-secondary sm:text-3xl'
				>
					Explore case studies
				</motion.h2>

				<div className='mt-10 grid gap-8 md:grid-cols-2'>
					{cards.map((card, idx) => (
						<motion.div
							key={card.title}
							{...inViewZoom({
								reduced: reducedMotion,
								delay: 0.08 + idx * 0.12,
								duration: 0.9,
								amount: 0.25,
							})}
							className={`rounded-3xl ${card.bg} px-10 py-10 text-center shadow-sm`}
						>
							<div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl'>
								<Image
									src={card.image}
									alt={card.title}
									className='h-full w-full object-contain'
								/>
							</div>
							<h3 className='text-lg font-semibold text-secondary'>
								{card.title}
							</h3>
							<p className='mt-3 text-sm leading-relaxed text-slate-600'>
								{card.description}
							</p>
							<div className='mt-8 flex justify-center'>
								<Link
									href={card.href === "/contact-us" ? SIGNUP_URL : card.href}
									{...(card.href === "/contact-us"
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
									className='inline-flex'
								>
									<motion.span
										{...heroCtaPulse(reducedMotion)}
										className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white ${card.buttonBg}`}
									>
										Get Started
									</motion.span>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExploreCaseStudies;
