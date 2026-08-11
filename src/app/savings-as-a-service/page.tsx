import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { SavingsAsAServiceHero } from "./_components/SavingsAsAServiceHero";
import WhatSavings from "./_components/WhatSavings";
import { HowItWorksSavings } from "./_components/HowItWorksSavings";
import { ServiceStructuredData } from "@/app/_components/ServiceStructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/savings-as-a-service",
	title: "Savings as a Service",
	description: "Offer savings and investment products with minimal engineering effort.",
	keywords: ["Payscribe", "savings as a service", "savings", "investments", "fintech", "API"],
});

export default function SavingsAsAServicePage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white'>
			<ServiceStructuredData name='Savings as a Service' description={metadata.description as string} path='/savings-as-a-service' />
			<Nav variant='white' />
			<SavingsAsAServiceHero />
			<WhatSavings />
			<HowItWorksSavings />
			<Footer />
		</div>
	);
}
