"use client";

import { useState } from "react";

const faqs = [
	{
		question: "How do I get started with creating a USD/NGN card?",
		answer:
			"Sign up for a Payscribe business account, complete your verification, and navigate to the Cards section to instantly create and manage virtual or physical USD/NGN cards.",
	},
	{
		question: "What is your return policy?",
		answer:
			"Refunds and reversals follow the policies of our acquiring partners and card schemes. Once a dispute or refund is initiated, we keep you updated at every step until it is resolved.",
	},
	{
		question: "How secure are the transactions made through your platform?",
		answer:
			"All payments are encrypted end-to-end and processed over PCI-DSS compliant infrastructure, with additional fraud monitoring and risk controls to keep your business and customers safe.",
	},
	{
		question: "Can I use your payment links for international transactions?",
		answer:
			"Yes. You can accept payments from customers in multiple countries using our payment links, subject to supported currencies and regions for your account.",
	},
];

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto max-w-4xl px-5'>
				<h2 className='text-center text-2xl font-semibold text-secondary sm:text-3xl'>
					Frequently Asked Questions
				</h2>

				<div className='mt-10 divide-y divide-slate-200 rounded-2xl border-b border-slate-200 bg-white'>
					{faqs.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<button
								key={item.question}
								type='button'
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className='flex w-full flex-col items-stretch text-left'
							>
								<div className='flex items-center justify-between px-6 py-4'>
									<span className='text-sm font-medium text-secondary sm:text-base'>
										{item.question}
									</span>
									<span className='ml-4 text-xl font-semibold text-primary'>
										{isOpen ? "−" : "+"}
									</span>
								</div>
								{isOpen && (
									<div className='px-6 pb-5 text-sm leading-relaxed text-slate-600'>
										{item.answer}
									</div>
								)}
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}
