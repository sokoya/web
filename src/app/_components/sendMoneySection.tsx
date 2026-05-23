"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import transfer from "@/assets/images/transfer1.png";
import transfer2 from "@/assets/images/transfer2.png";
import allWhite from "@/assets/images/pay-all-white.png";
import { inViewFromTop, inViewZoom } from "@/lib/animations";

const SendMoneySection = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<div className='container mx-auto my-20 px-5'>
			<motion.h2
				{...inViewFromTop({ reduced: reducedMotion, delay: 0.1, duration: 1.0 })}
				className='text-3xl font-medium text-secondary text-center'
			>
				Send Money Your Way — One Payment or Thousands
			</motion.h2>
			<motion.p
				{...inViewFromTop({ reduced: reducedMotion, delay: 0.25, duration: 1.0 })}
				className='mt-4 text-base leading-relaxed text-slate-600 text-center max-w-xl mx-auto'
			>
				From simple transfers to large-scale payouts, move money faster with
				secure, automated payment infrastructure.
			</motion.p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative mt-10 max-w-3xl mx-auto'>
				<motion.div {...inViewZoom({ reduced: reducedMotion, delay: 0.35, duration: 1.05 })}>
					<Image
						src={transfer}
						alt='transfer'
						className='relative z-10 w-full'
						width={500}
						height={500}
					/>
				</motion.div>
				<motion.div {...inViewZoom({ reduced: reducedMotion, delay: 0.5, duration: 1.05 })}>
					<Image
						src={transfer2}
						alt='transfer'
						className='relative z-10 w-full'
						width={500}
						height={500}
					/>
				</motion.div>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.62, duration: 1.1 })}
					className='absolute top-0 translate-y-1/2'
				>
					<Image src={allWhite} alt='allWhite' width={500} className='w-full' />
				</motion.div>
			</div>
		</div>
	);
};

export default SendMoneySection;
