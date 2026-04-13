"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/images/app-icon.png";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/assets/images/wallet.png";
import card2 from "@/assets/images/wallet2.png";
import card3 from "@/assets/images/wallet3.png";
import card4 from "@/assets/images/wallet4.png";
import card5 from "@/assets/images/wallet5.png";
import card6 from "@/assets/images/wallet6.png";

/** 4th card in the carousel (0-based index 3) — Bills Payment */
const BILLS_PAYMENT_CARD_INDEX = 3;

function IntegrationSectionInner() {
	const searchParams = useSearchParams();

	const cards = useMemo(
		() => [
			{
				tag: "Accounts and Wallets",
				title: "Build seamless accounts and wallets with half the effort.",
				paragraph:
					"Enable your customers to send, receive and store money in multiple currencies. With support for multiple currencies, your customers can enjoy greater flexibility and convenience in handling international payments.",
				image: card1,
				fromBgColor: "#214DC0",
				toBgColor: "#0F245A",
				learnMoreHref: "/digital-payments",
			},
			{
				tag: "Card  Issuing",
				title: "Card Issuing",
				paragraph:
					"Expand your financial reach with seamless USD/NGN card issuance, enabling businesses to customize cards with their brand identity, creating a personalized and professional experience for their customers.",
				image: card2,
				fromBgColor: "#8621C0",
				toBgColor: "#0F245A",
				learnMoreHref: "/cards-issuing",
			},
			{
				tag: "Savings and Investment",
				title: "Boost savings and investments with minimal work",
				paragraph:
					"Set up tailored target savings, fixed deposits, and investment solutions to help individuals and businesses achieve their financial objectives with ease and efficiency.",
				fromBgColor: "#105B12",
				toBgColor: "#0F245A",
				image: card3,
				learnMoreHref: "/savings-as-a-service",
			},
			{
				tag: "Bills Payment",
				title: "Simplify bill payments with ease",
				paragraph:
					"Effortlessly manage local and international bill payments with a streamlined and secure platform. From utility bills to global subscriptions, simplify the way you handle payments by offering a single platform for both local and international transactions, ensuring convenience and reliability for your customers.",
				fromBgColor: "#5B1052",
				toBgColor: "#0F245A",
				image: card4,
			},
			{
				tag: "Cross-border Transfers",
				title: "Unlock Global Growth with Secure Cross-Border Payments",
				paragraph:
					"Expand your business globally by enabling secure cross-border payments. Our platform simplifies international financial transactions, allowing your business to offer seamless and secure transfers across borders with ease.",
				fromBgColor: "#5B5910",
				toBgColor: "#0F245A",
				image: card5,
				learnMoreHref: "/stable-coin-rails",
			},
			{
				tag: "Automated Payouts",
				title: "Automate Payouts to Suppliers and Contractors",
				paragraph:
					"Streamline your business operations by automating payments to vendors, suppliers, and contractors. Reduce manual effort and improve accuracy with our scalable payout solutions that handle high-volume transactions effortlessly.",
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
					EFFORTLESS FINANCIAL INTEGRATION
				</span>
				<h2 className='mt-6 max-w-3xl text-2xl font-semibold text-secondary sm:text-3xl'>
					Streamline Your Payments and Financial Services with Ease
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
											href={"https://app.payscribe.ng/login"}
											target='_blank'
											className='rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary'
										>
											Get Started
										</Link>
										{activeCard.learnMoreHref ? (
											<Link
												href={activeCard.learnMoreHref}
												className='rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
											>
												Learn More
											</Link>
										) : null}
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

export function IntegrationSection() {
	return (
		<Suspense fallback={null}>
			<IntegrationSectionInner />
		</Suspense>
	);
}
