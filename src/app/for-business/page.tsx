import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ForBusinessHero } from "./_components/ForBusinessHero";
import { BillFeaturesSection } from "./_components/BillFeaturesSection";
import BusinessServicesSection from "./_components/BusinessServicesSection";
import { IntegrationSection } from "../_components/IntegrationSection";
import { FaqSection } from "./_components/FaqSection";
import StartBuilding from "../_components/startBuilding";

export const metadata: Metadata = {
	title: "For Business",
	description: "Build and scale your business with Payscribe’s payment infrastructure and financial services.",
	keywords: ["Payscribe", "business", "payments", "collections", "payouts", "fintech", "API"],
};

export default function ForBusinessPage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white'>
			<Nav variant='white' />
			<ForBusinessHero />
			<BillFeaturesSection />
			<BusinessServicesSection />
			<IntegrationSection />
			<FaqSection />
			<StartBuilding />
			<Footer />
		</div>
	);
}
