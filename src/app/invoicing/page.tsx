import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { InvoiceHero } from "./_components/InvoiceHero";
import { WhyInvoiceSection } from "./_components/WhyInvoiceSection";
import { HowItWorksInvoice } from "./_components/HowItWorksInvoice";
import StartBuilding from "../_components/startBuilding";

export const metadata: Metadata = {
	title: "Invoicing",
	description: "Create and manage invoices with tools designed for faster payments and better cash flow.",
	keywords: ["Payscribe", "invoicing", "invoices", "payments", "business tools", "fintech"],
};

export default function InvoicePage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<InvoiceHero />
			<WhyInvoiceSection />
			<HowItWorksInvoice />
			<StartBuilding />
			<Footer />
		</div>
	);
}
