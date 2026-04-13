"use client";

import { useState } from "react";

const TABS = [
	"Lending",
	"Payroll",
	"Marketplace",
	"Mobility",
	"Digital Payments",
] as const;

const FEATURES = [
	{
		title: "Virtual Accounts",
		description:
			"Create and manage multi-currency virtual accounts for your users with a single API call.",
	},
	{
		title: "Collections",
		description:
			"Accept one-time and recurring payments via cards, bank transfer, and mobile money.",
	},
	{
		title: "Payouts",
		description:
			"Send funds to bank accounts, mobile wallets, or Payscribe balances programmatically.",
	},
	{
		title: "Identity & KYC",
		description:
			"Verify users and businesses with built-in identity checks and compliance workflows.",
	},
	{
		title: "Cards Issuing",
		description:
			"Issue virtual and physical cards in USD/NGN for spending and withdrawals.",
	},
	{
		title: "Analytics & Reporting",
		description:
			"Access real-time transaction data, balances, and reports via API for your dashboards.",
	},
];

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";

export function DevelopersCanDoSection() {
	const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Lending");

	return (
		<section className='bg-white py-16'>
			<div className='mx-auto max-w-6xl px-5'>
				<div className='flex flex-col items-center text-center'>
					<span className='rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary'>
						SEAMLESS API INTEGRATION
					</span>
					<h2 className='mt-5 text-2xl font-bold text-secondary sm:text-3xl'>
						What Developers Can Do
					</h2>
				</div>

				<div className='mt-8 flex flex-wrap items-center justify-center gap-2'>
					{TABS.map((tab) => (
						<button
							key={tab}
							type='button'
							onClick={() => setActiveTab(tab)}
							className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
								activeTab === tab
									? "bg-primary text-white"
									: "bg-white text-secondary shadow-sm ring-1 ring-slate-200 hover:ring-slate-300"
							}`}
						>
							{tab}
						</button>
					))}
				</div>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{FEATURES.map((feature) => (
						<div
							key={feature.title}
							className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
						>
							<h3 className='text-base font-semibold text-secondary'>
								{feature.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed text-slate-600'>
								{feature.description}
							</p>
							<a
								href={SIGNUP_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-2'
							>
								Read API Documentation
								<span aria-hidden>→</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
