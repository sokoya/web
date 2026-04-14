"use client";

import { useState } from "react";

type FeatureCategory =
	| "Accounts"
	| "Payments"
	| "Payouts"
	| "Cards"
	| "Compliance"
	| "Reporting"
	| "Stablecoin"
	| "Other";

type Feature = {
	title: string;
	description: string;
	link: string;
	category: FeatureCategory;
};

const CATEGORIES: Array<{ id: FeatureCategory; label: string }> = [
	{ id: "Accounts", label: "Accounts" },
	{ id: "Payments", label: "Payments" },
	{ id: "Payouts", label: "Payouts" },
	{ id: "Cards", label: "Cards" },
	{ id: "Compliance", label: "Compliance" },
	{ id: "Reporting", label: "Reporting" },
	{ id: "Stablecoin", label: "Stablecoin" },
	{ id: "Other", label: "Other" },
];

const FEATURES: Feature[] = [
	{
		title: "Virtual Accounts",
		description:
			"Create and manage multi-currency virtual accounts for your users with a single API call.",
		link: "https://docs.payscribe.co/#448bbbab-2909-47bf-9e93-c734db2fc8ca",
		category: "Accounts",
	},
	{
		title: "Webhook Security & Signature Verification",
		description:
			"Verify webhook signatures and securely process event notifications.",
		link: "https://docs.payscribe.co/#007bac66-92bd-4f4f-b992-b0e48b795290",
		category: "Other",
	},
	{
		title: "Bills Payments API",
		description:
			"Programmatically pay bills and automate recurring bill workflows.",
		link: "https://docs.payscribe.co/#6e6e2f72-2dd2-46ce-bf6d-0e66fac18e4c",
		category: "Payments",
	},
	{
		title: "My Account API",
		description:
			"Manage account profiles, settings, and account-related operations via API.",
		link: "https://docs.payscribe.co/#66967509-e8b0-42b6-a839-a31ca0b28332",
		category: "Accounts",
	},
	{
		title: "Collections",
		description:
			"Accept one-time and recurring payments via cards, bank transfer, and mobile money.",
		link: "https://docs.payscribe.co/#a50a7cef-737f-434a-9fc0-dd087ba01e12",
		category: "Payments",
	},
	{
		title: "Payment Links",
		description: "Generate shareable payment links and track payment status.",
		link: "https://docs.payscribe.co/#bc1deca9-d008-4540-b254-ef81385bdcc8",
		category: "Payments",
	},
	{
		title: "Invoices",
		description: "Create, send, and manage invoices programmatically.",
		link: "https://docs.payscribe.co/#c165d348-963c-42ba-b5f3-e1e137471483",
		category: "Payments",
	},
	{
		title: "Payouts",
		description:
			"Send funds to bank accounts, mobile wallets, or Payscribe balances programmatically.",
		link: "https://docs.payscribe.co/#4e854c5c-1c6c-4dd3-bdd5-cf7bd8a348b7",
		category: "Payouts",
	},
	{
		title: "Customers",
		description:
			"Create and manage customer records used across payments and products.",
		link: "https://docs.payscribe.co/#448bbbab-2909-47bf-9e93-c734db2fc8ca",
		category: "Accounts",
	},
	{
		title: "Identity & KYC",
		description:
			"Verify users and businesses with built-in identity checks and compliance workflows.",
		link: "https://docs.payscribe.co/#f8515ba4-897b-43a4-b576-d9c6421ba042",
		category: "Compliance",
	},
	{
		title: "FX & Conversions",
		description: "Convert between currencies and manage FX-related flows.",
		link: "https://docs.payscribe.co/#e83efc54-aa49-40e3-a429-3ffaac16eb75",
		category: "Other",
	},
	{
		title: "Cards Issuing",
		description:
			"Issue virtual and physical cards in USD/NGN for spending and withdrawals.",
		link: "https://docs.payscribe.co/#29c3311d-791a-487b-be77-56584f8388c5",
		category: "Cards",
	},
	{
		title: "Savings API",
		description:
			"Build savings products and automate savings workflows via API.",
		link: "https://docs.payscribe.co/#ff7045a6-3db2-47ec-b7cc-58731e354e30",
		category: "Other",
	},
	{
		title: "Misc APIs",
		description:
			"Supporting endpoints and utilities that power the rest of the platform.",
		link: "https://docs.payscribe.co/#68207c38-8783-4504-a94d-2f4bad1dbc39",
		category: "Other",
	},
	{
		title: "Stablecoin",
		description:
			"Stablecoin rails and endpoints for modern cross-border flows.",
		link: "https://docs.payscribe.co/#67e26a44-37bd-47fc-8bc5-e2a119e1eb1d",
		category: "Stablecoin",
	},
	{
		title: "Analytics & Reporting",
		description:
			"Access real-time transaction data, balances, and reports via API for your dashboards.",
		link: "https://docs.payscribe.co/#cbde4dc3-ccbf-42b0-bd50-ca9efa7c0578",
		category: "Reporting",
	},
];

export function DevelopersCanDoSection() {
	const [activeCategory, setActiveCategory] =
		useState<FeatureCategory>("Accounts");

	const visibleFeatures = FEATURES.filter(
		(feature) => feature.category === activeCategory,
	);

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
					{CATEGORIES.map((tab) => (
						<button
							key={tab.id}
							type='button'
							onClick={() => setActiveCategory(tab.id)}
							className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
								activeCategory === tab.id
									? "bg-primary text-white"
									: "bg-white text-secondary shadow-sm ring-1 ring-slate-200 hover:ring-slate-300"
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{visibleFeatures.map((feature) => (
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
							{feature.link ? (
								<a
									href={feature.link}
									target='_blank'
									rel='noopener noreferrer'
									className='mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-2'
								>
									Read API Documentation
									<span aria-hidden>→</span>
								</a>
							) : (
								<span className='mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-400'>
									Read API Documentation
									<span aria-hidden>→</span>
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
