import type { Metadata } from "next";
import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Footer } from "./_components/Footer";
import SponsorSection from "./_components/sponsorSection";
import { ToolsSection } from "./_components/ToolsSection";
import { IntegrationSection } from "./_components/IntegrationSection";
import ServiceSection from "./_components/serviceSection";
import SendMoneySection from "./_components/sendMoneySection";
import OneAccountSection from "./_components/oneAccountSection";
import WhyBusinessSection from "./_components/whyBusinessSection";
import TrustedSection from "./_components/trustedSection";
import StartBuilding from "./_components/startBuilding";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Payscribe provides payment infrastructure for businesses: digital payments, card issuing, stablecoin rails, invoicing, and more.",
	keywords: [
		"Payscribe",
		"payment infrastructure",
		"fintech",
		"API",
		"digital payments",
		"card issuing",
		"stablecoin",
		"invoicing",
	],
};

export default function Home() {
	return (
		<div className='min-h-screen bg-gray-50 text-secondary'>
			<Nav />
			<Hero />
			{/* <SponsorSection /> */}
			<ToolsSection />
			<IntegrationSection />
			<ServiceSection />
			<SendMoneySection />
			<OneAccountSection />
			<WhyBusinessSection />
			<TrustedSection />
			<StartBuilding />
			<Footer />
		</div>
	);
}
