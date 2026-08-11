import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { PaymentLinkHero } from "./_components/PaymentLinkHero";
import { WhyUsePaymentLinks } from "./_components/WhyUsePaymentLinks";
import { HowItWorksPaymentLink } from "./_components/HowItWorksPaymentLink";
import StartBuilding from "../_components/startBuilding";
import { ServiceStructuredData } from "@/app/_components/ServiceStructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/payment-link",
	title: "Payment Link",
	description: "Create payment links to accept payments quickly and securely.",
	keywords: ["Payscribe", "payment link", "pay by link", "collections", "digital payments", "fintech"],
});

export default function PaymentLinkPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<ServiceStructuredData name='Payment links' description={metadata.description as string} path='/payment-link' />
			<Nav variant='white' />
			<PaymentLinkHero />
			<WhyUsePaymentLinks />
			<HowItWorksPaymentLink />
			<StartBuilding />
			<Footer />
		</div>
	);
}
