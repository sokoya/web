import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { StableCoinRailsHero } from "./_components/StableCoinRailsHero";
import WhyStableCoins from "./_components/WhyStableCoins";
import { HowItWorksStable } from "./_components/HowItWorksStable";
import SendAndRecieve from "./_components/SendAndRecieve";
import StartBuilding from "../_components/startBuilding";
import { ServiceStructuredData } from "@/app/_components/ServiceStructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/stable-coin-rails",
	title: "Stablecoin Rails",
	description:
		"Move money globally using stablecoin rails built for secure, fast cross-border payments.",
	keywords: [
		"Payscribe",
		"stablecoin",
		"stablecoin rails",
		"cross-border payments",
		"USDC",
		"fintech",
		"API",
	],
});

export default function StableCoinRailsPage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white '>
			<ServiceStructuredData name='Stablecoin rails' description={metadata.description as string} path='/stable-coin-rails' />
			<Nav variant='white' />
			<StableCoinRailsHero />
			<WhyStableCoins />
			<SendAndRecieve />
			<HowItWorksStable />
			<StartBuilding />
			<Footer />
		</div>
	);
}
