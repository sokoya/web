import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { InvoiceHero } from "./_components/InvoiceHero";
import { WhyInvoiceSection } from "./_components/WhyInvoiceSection";
import { HowItWorksInvoice } from "./_components/HowItWorksInvoice";
import StartBuilding from "../_components/startBuilding";
import { ServiceStructuredData } from "@/app/_components/ServiceStructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/invoicing",
	title: "Invoicing",
	description: "Create and manage invoices with tools designed for faster payments and better cash flow.",
	keywords: ["Payscribe", "invoicing", "invoices", "payments", "business tools", "fintech"],
});

export default function InvoicePage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<ServiceStructuredData name='Invoicing' description={metadata.description as string} path='/invoicing' />
			<Nav variant='white' />
			<InvoiceHero />
			<WhyInvoiceSection />
			<HowItWorksInvoice />
			<StartBuilding />
			<Footer />
		</div>
	);
}
