"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/images/app-icon.png";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/assets/images/issue1.png";
import card2 from "@/assets/images/issue2.png";
import card3 from "@/assets/images/issue3.png";
import card4 from "@/assets/images/issue4.png";
import card5 from "@/assets/images/issue5.png";
import card6 from "@/assets/images/issue6.png";

/** 4th card in the carousel (0-based index 3) — Bills Payment */
const BILLS_PAYMENT_CARD_INDEX = 3;

function IntegrationSectionInner() {
	const searchParams = useSearchParams();

	const cards = useMemo(
		() => [
			{
				tag: "E-Commerce",
				title: "E-Commerce",
				paragraph:
					"Streamline online transactions with secure virtual cards, making global purchases and vendor payments effortless for online retailers.",
				image: card1,
				fromBgColor: "#214DC0",
				toBgColor: "#0F245A",
				learnMoreHref: "/",
			},
			{
				tag: "Freelancers and Gig Economy",
				title: "Freelancers and Gig Economy",
				paragraph:
					"Enable freelancers and gig workers to receive international payments and manage their funds with ease, supporting their global business needs.",
				image: card2,
				fromBgColor: "#8621C0",
				toBgColor: "#0F245A",
				learnMoreHref: "/cards-issuing",
			},
			{
				tag: "Travel and Hospitality",
				title: "Travel and Hospitality",
				paragraph:
					"Provide travelers and hospitality businesses with a convenient way to handle foreign transactions, bookings, and cross-border payments.",
				fromBgColor: "#105B12",
				toBgColor: "#0F245A",
				image: card3,
				learnMoreHref: "/savings-as-a-service",
			},
			{
				tag: "Subscription Services",
				title: "Subscription Services",
				paragraph:
					"Optimize recurring payments for subscription-based businesses, ensuring reliable, hassle-free billing processes.",
				fromBgColor: "#5B1052",
				toBgColor: "#0F245A",
				image: card4,
			},
			{
				tag: "Tech Startups and SaaS Platforms",
				title: "Tech Startups and SaaS Platforms",
				paragraph:
					"Support startups and SaaS companies in managing international expenses, vendor payouts, and employee incentives with a unified card solution.",
				fromBgColor: "#5B5910",
				toBgColor: "#0F245A",
				image: card5,
				learnMoreHref: "/stable-coin-rails",
			},
			{
				tag: "Automate Corporate Payments",
				title: "Automate Corporate Payments",
				paragraph:
					"Manage large-scale corporate payments effortlessly. Automate and schedule payments across departments and partners, reducing administrative strain while boosting operational efficiency.",
				fromBgColor: "#000000",
				toBgColor: "#0F245A",
				image: card6,
				learnMoreHref: "/invoicing",
			},
		],
		[],
	);

	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const activeCard = cards[activeIndex];

	useEffect(() => {
		const integration = searchParams.get("integration");
		const cardParam = searchParams.get("integrationCard");
		let targetIndex: number | null = null;

		if (integration === "bills") {
			targetIndex = BILLS_PAYMENT_CARD_INDEX;
		} else if (cardParam) {
			const n = parseInt(cardParam, 10);
			if (!Number.isNaN(n) && n >= 1 && n <= cards.length) {
				targetIndex = n - 1;
			}
		}

		if (targetIndex === null) return;

		setDirection(1);
		setActiveIndex(targetIndex);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				document.getElementById("integration")?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			});
		});
	}, [searchParams, cards.length]);

	const goPrev = () => {
		setDirection(-1);
		setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
	};

	const goNext = () => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % cards.length);
	};

	return (
		<section
			id='integration'
			className='mx-auto mt-24 w-full max-w-6xl scroll-mt-24 px-6'
		>
			<div className='flex flex-col items-center text-center'>
				<span className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary shadow-sm'>
					<span className='text-yellow-400'>⚡</span>
					VIRTUAL CARDS FOR ANY BUSINES
				</span>
				<h2 className='mt-6 max-w-3xl text-2xl font-semibold text-secondary sm:text-3xl'>
					Payscribe offers virtual debit cards designed to cater to diverse
					business models and industries.
				</h2>
			</div>

			<div className='relative mt-10 flex items-center justify-center gap-6'>
				{/* Left arrow */}
				<button
					type='button'
					onClick={goPrev}
					aria-label='Previous integration card'
					className='hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/10 text-primary shadow-md transition hover:bg-primary/20 sm:flex cursor-pointer'
				>
					<ChevronLeftIcon />
				</button>
				{/* Right arrow. */}
				<motion.div
					className='overflow-hidden rounded-3xl text-white shadow-xl p-8'
					animate={{
						background: `linear-gradient(135deg, ${activeCard.fromBgColor} 0%, ${activeCard.toBgColor} 100%)`,
					}}
					transition={{ duration: 0.45, ease: "easeInOut" }}
				>
					<div className='flex justify-between gap-4 items-center mb-10'>
						<Image src={logo} alt='logo' width={90} height={90} />
						<AnimatePresence mode='wait' initial={false}>
							<motion.div
								key={`tag-${activeIndex}`}
								initial={{ opacity: 0, x: direction > 0 ? 14 : -14 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: direction > 0 ? -14 : 14 }}
								transition={{ duration: 0.28, ease: "easeOut" }}
								className='rounded-full bg-white/15 p-4 text-xs font-semibold w-fit ml-auto'
							>
								{activeCard.tag}
							</motion.div>
						</AnimatePresence>
					</div>
					<div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
						<div className='max-w-md text-left min-h-[280px]'>
							<AnimatePresence mode='wait' initial={false}>
								<motion.div
									key={`content-${activeIndex}`}
									initial={{ opacity: 0, x: direction > 0 ? 24 : -24 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: direction > 0 ? -24 : 24 }}
									transition={{ duration: 0.35, ease: "easeOut" }}
								>
									<h3 className='text-2xl font-medium md:text-3xl'>
										{activeCard.title}
									</h3>
									<p className='mt-4 text-sm leading-relaxed text-blue-100'>
										{activeCard.paragraph}
									</p>
									<div className='mt-6 flex flex-wrap gap-4'>
										<Link
											href={"/contact-us"}
											className='rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary'
										>
											Contact Us
										</Link>

										<Link
											href={"/book-a-demo"}
											className='rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
										>
											Book a Demo
										</Link>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>

						<div className='relative mt-4 w-full md:mt-0 md:w-[458px]'>
							<AnimatePresence mode='wait' initial={false}>
								<motion.div
									key={`image-${activeIndex}`}
									initial={{
										opacity: 0,
										x: direction > 0 ? 28 : -28,
										scale: 0.98,
									}}
									animate={{ opacity: 1, x: 0, scale: 1 }}
									exit={{
										opacity: 0,
										x: direction > 0 ? -28 : 28,
										scale: 0.98,
									}}
									transition={{ duration: 0.4, ease: "easeOut" }}
								>
									<Image
										src={activeCard.image}
										alt={activeCard.tag}
										className='h-[260px] w-full object-contain md:h-[304px]'
										width={458}
										height={304}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
					<div className='mt-8 flex items-center justify-center gap-2'>
						{cards.map((card, idx) => (
							<button
								type='button'
								key={card.tag}
								onClick={() => {
									setDirection(idx > activeIndex ? 1 : -1);
									setActiveIndex(idx);
								}}
								aria-label={`Go to ${card.tag}`}
								className={`h-2.5 rounded-full transition-all ${
									idx === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/40"
								}`}
							/>
						))}
					</div>
				</motion.div>
				<button
					type='button'
					onClick={goNext}
					aria-label='Next integration card'
					className='hidden h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-md transition hover:bg-primary/20 sm:flex cursor-pointer'
				>
					<ChevronRightIcon />
				</button>
			</div>
		</section>
	);
}

export function CardServices() {
	return (
		<Suspense fallback={null}>
			<IntegrationSectionInner />
		</Suspense>
	);
}
