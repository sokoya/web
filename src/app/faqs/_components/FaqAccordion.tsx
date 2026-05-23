"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop, inViewFadeUp, inViewZoom } from "@/lib/animations";

const faqs = [
	{
		question: "What services does Payscribe offer for businesses?",
		answer:
			"Payscribe provides a comprehensive suite of financial services, including secure payment acceptance, virtual debit card issuance in USD/NGN, and financial management tools to streamline your operations and grow your business.",
	},
	{
		question: "How can my business accept payments using Payscribe?",
		answer:
			"With Payscribe, you can integrate our API or use the dashboard to accept payments from multiple channels, including bank transfers, and mobile wallets, enabling a seamless experience for your customers.",
	},
	{
		question: "Can Payscribe support cross-border payments?",
		answer:
			"Using Payscribe’s card issuing API, you can create and manage virtual USD/NGN debit cards for your business or customers, giving them secure and flexible payment options.",
	},
	{
		question: "How do I issue virtual cards through Payscribe?",
		answer:
			"Yes. Using Payscribe’s card issuing API, you can create and manage virtual USD/NGN debit cards for your business or customers, giving them secure and flexible payment options.",
	},
	{
		question: "How secure is Payscribe’s platform?",
		answer:
			"Payscribe employs advanced encryption and complies with global security standards to ensure all transactions and data are secure and protected from fraud.",
	},
	{
		question: "What industries does Payscribe support?",
		answer:
			"Payscribe supports a variety of industries, including e-commerce, lending, payroll, marketplaces, mobility, and digital payment platforms, with customizable solutions to fit each sector’s unique needs.",
	},
	{
		question: "Can Payscribe handle recurring payments or subscriptions?",
		answer:
			"Yes, Payscribe supports recurring payments, making it easy for subscription-based businesses to automate billing cycles and ensure consistent cash flow.",
	},
	{
		question: "How do I get started with Payscribe?",
		answer:
			"Getting started is simple! Sign up for a Payscribe business account, integrate our API or use the dashboard, and start accessing our robust financial services. Our support team is available to guide you through the process.",
	},
	{
		question: "What kind of customer support does Payscribe offer?",
		answer:
			"We provide dedicated support via email, live chat to assist you with integration, troubleshooting, and optimizing your experience with Payscribe.",
	},
];

export function FaqAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto max-w-4xl px-5'>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion, delay: 0.05, duration: 0.9, amount: 0.25 })}
					className='divide-y divide-slate-200 rounded-2xl border-b border-slate-200 bg-white'
				>
					{faqs.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<motion.button
								key={item.question}
								type='button'
								onClick={() => setOpenIndex(isOpen ? null : index)}
								{...inViewFadeUp({
									reduced: reducedMotion,
									delay: 0.08 + index * 0.03,
									duration: 0.65,
									amount: 0.6,
								})}
								className='flex w-full flex-col items-stretch text-left'
							>
								<div className='flex items-center justify-between px-6 py-4'>
									<span className='text-sm font-medium text-secondary sm:text-base'>
										{item.question}
									</span>
									<span className='ml-4 shrink-0 text-xl font-semibold text-primary'>
										{isOpen ? "−" : "+"}
									</span>
								</div>
								{isOpen && (
									<div className='px-6 pb-5 text-sm leading-relaxed text-slate-600'>
										{item.answer}
									</div>
								)}
							</motion.button>
						);
					})}
				</motion.div>

				<motion.div
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.12, duration: 0.85 })}
					className='mt-10 rounded-2xl bg-blue-50 px-6 py-5 text-center'
				>
					<p className='text-sm text-slate-700'>
						Got more questions? Email us at{" "}
						<a
							href='mailto:hello@payscribe.ng'
							className='font-semibold text-primary underline underline-offset-2'
						>
							hello@payscribe.ng
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
