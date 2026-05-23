"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

import left1 from "@/assets/images/left1.png";
import left2 from "@/assets/images/left2.png";
import right1 from "@/assets/images/right1.png";
import right2 from "@/assets/images/right2.png";
import right3 from "@/assets/images/right3.png";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function Hero() {
	const heroRef = useRef<HTMLElement | null>(null);
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start end", "end start"],
	});

	const leftParallaxY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [24, -24]);
	const rightParallaxY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [32, -32]);
	const centerParallaxY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [18, -18]);
	const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

	const revealTransition = {
		duration: 0.85,
		ease: smoothEase,
	};

	const getCardMotion = (delay: number) =>
		reducedMotion
			? {}
			: {
					initial: { opacity: 0, y: -70, scale: 0.95, rotateX: 6 },
					whileInView: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
					viewport: { once: false, amount: 0.35 },
					transition: { ...revealTransition, delay },
				};

	return (
		<main
			ref={heroRef}
			className='relative mx-auto flex w-full flex-col items-center overflow-hidden pt-20 text-center'
			style={{
				background:
					"linear-gradient(180deg, #e8f1fc 0%, #f4f8ff 60%, #ffffff 100%)",
			}}
		>
			{!reducedMotion && (
				<motion.div
					className='pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6ea0ff]/20 blur-3xl'
					animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.75, 0.55] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
			)}

			{/* Left-side cards */}
			<motion.div
				style={{ y: leftParallaxY }}
				className='pointer-events-none absolute left-0 top-0 hidden md:block'
			>
				<motion.div className='relative h-32 w-48' {...getCardMotion(0.08)}>
					<Image
						src={left1}
						alt='Monthly analytics card'
						fill
						className='object-contain object-left'
						priority
					/>
				</motion.div>
			</motion.div>
			<motion.div
				style={{ y: leftParallaxY }}
				className='pointer-events-none absolute bottom-0 left-0 hidden md:block'
			>
				<motion.div className='relative h-52 w-60' {...getCardMotion(0.16)}>
					<Image
						src={left2}
						alt='Activity breakdown card'
						fill
						className='object-contain object-left'
					/>
				</motion.div>
			</motion.div>

			<motion.div
				style={{ y: rightParallaxY }}
				className='pointer-events-none absolute right-0 top-4 hidden  md:block'
			>
				<motion.div className='relative h-36 w-64' {...getCardMotion(0.24)}>
					<Image
						src={right1}
						alt='Earned this month card'
						fill
						className='object-contain object-right'
					/>
				</motion.div>
			</motion.div>
			<motion.div
				style={{ y: rightParallaxY }}
				className='pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block'
			>
				<motion.div className='relative h-36 w-64' {...getCardMotion(0.32)}>
					<Image
						src={right2}
						alt='Completed transactions card'
						fill
						className='object-contain object-right'
					/>
				</motion.div>
			</motion.div>
			<motion.div
				style={{ y: rightParallaxY }}
				className='pointer-events-none absolute bottom-4 right-0 hidden md:block'
			>
				<motion.div className='relative h-36 w-64' {...getCardMotion(0.4)}>
					<Image
						src={right3}
						alt='Users statistics card'
						fill
						className='object-contain object-right'
					/>
				</motion.div>
			</motion.div>
			<motion.div
				style={{ y: centerParallaxY }}
				className='relative z-10 flex flex-col items-center justify-center pb-20'
			>
				<motion.h1
					{...(reducedMotion
						? {}
						: {
								initial: { opacity: 0, y: 28, filter: "blur(8px)" },
								whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
								viewport: { once: false, amount: 0.45 },
								transition: { ...revealTransition, delay: 0.45 },
							})}
					className='max-w-4xl text-balance text-4xl font-medium leading-tight sm:text-5xl'
				>
					Empowering Businesses with the Future of Financial Innovation.
				</motion.h1>
				<motion.p
					{...(reducedMotion
						? {}
						: {
								initial: { opacity: 0, y: 24, filter: "blur(6px)" },
								whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
								viewport: { once: false, amount: 0.45 },
								transition: { ...revealTransition, delay: 0.58 },
							})}
					className='mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl'
				>
					Payscribe provides businesses with a robust payment infrastructure to
					securely accept payments, issue USD/NGN cards for seamless
					cross-border transactions, and deliver a full range of financial
					services to enhance customer experience.
				</motion.p>

				<motion.div
					{...(reducedMotion
						? {}
						: {
								initial: { opacity: 0, y: 20 },
								whileInView: { opacity: 1, y: 0 },
								viewport: { once: false, amount: 0.45 },
								transition: { ...revealTransition, delay: 0.72 },
							})}
					className='mt-10 flex flex-col gap-4 sm:flex-row'
				>
					<Link
						href={SIGNUP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex'
					>
						<motion.span
						whileHover={
							reducedMotion ? undefined : { y: -2, scale: 1.02, boxShadow: "0 14px 30px rgba(33,77,192,0.28)" }
						}
						transition={{ duration: 0.22 }}
						className='rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white sm:text-base'
					>
						Create A Free Account
						</motion.span>
					</Link>
					<Link href='/book-a-demo' className='inline-flex'>
						<motion.span
							whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
							transition={{ duration: 0.22 }}
							className='rounded-full bg-blue-100 px-10 py-4 text-sm font-semibold text-primary sm:text-base'
						>
							Book a Demo
						</motion.span>
					</Link>
				</motion.div>
			</motion.div>
		</main>
	);
}
