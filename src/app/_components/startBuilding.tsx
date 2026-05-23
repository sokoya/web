"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import cardBg from "@/assets/images/card-bg.png";
import cardGroup from "@/assets/images/cardGroup.png";
import { inViewZoom } from "@/lib/animations";

const StartBuilding = () => {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='relative overflow-hidden bg-linear-to-r from-[#10379F] to-[#051339] py-20 md:py-28 flex items-center justify-center h-[500px]'>
			<div className='container relative mx-auto flex flex-col items-start px-5 md:flex-row md:items-center md:justify-between'>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.1, duration: 1 })}
					className='relative z-10 max-w-xl'
				>
					<h2 className='text-3xl font-bold text-white md:text-4xl'>
						Start Building Today
					</h2>
					<p className='mt-4 text-sm leading-relaxed text-white/90 md:text-base'>
						Sign up in seconds and start processing payments right away!
						Alternatively, our experts are here to help you craft a tailored
						payment solution that perfectly suits your business needs — just
						reach out to us!
					</p>
					<div className='mt-8 flex flex-wrap gap-4'>
						<button className='rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary'>
							Start Building
						</button>
						<button className='rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white'>
							Contact Us
						</button>
					</div>
				</motion.div>
			</div>
			<Image
				src={cardGroup}
				alt='cardBg'
				className='w-fit h-[400px] absolute bottom-0 right-10 hidden md:block'
				width={500}
				height={500}
			/>
		</section>
	);
};

export default StartBuilding;
