import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { PaymentLinkHero } from "./_components/PaymentLinkHero";
import { WhyUsePaymentLinks } from "./_components/WhyUsePaymentLinks";
import { HowItWorksPaymentLink } from "./_components/HowItWorksPaymentLink";
import StartBuilding from "../_components/startBuilding";

export const metadata: Metadata = {
	title: "Payment Link",
	description: "Create payment links to accept payments quickly and securely.",
	keywords: ["Payscribe", "payment link", "pay by link", "collections", "digital payments", "fintech"],
};

export default function PaymentLinkPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<PaymentLinkHero />
			<WhyUsePaymentLinks />
			<HowItWorksPaymentLink />
			<StartBuilding />
			<Footer />
		</div>
	);
}
