import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { DigitalPaymentsHero } from "./_components/DigitalPaymentsHero";
import { DigitalPaymentsFeatures } from "./_components/DigitalPaymentsFeatures";
import { DigitalPaymentsExplore } from "./_components/DigitalPaymentsExplore";
import StartBuilding from "../_components/startBuilding";
import { ServiceStructuredData } from "@/app/_components/ServiceStructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/digital-payments",
	title: "Digital Payments",
	description: "Accept and process digital payments with secure, scalable infrastructure built for businesses.",
	keywords: ["Payscribe", "digital payments", "payment gateway", "collections", "fintech", "API"],
});

export default function DigitalPaymentsPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<ServiceStructuredData name='Digital payments' description={metadata.description as string} path='/digital-payments' />
			<Nav variant='white' />
			<DigitalPaymentsHero />
			<DigitalPaymentsFeatures />
			<DigitalPaymentsExplore />
			<StartBuilding />
			<Footer />
		</div>
	);
}
