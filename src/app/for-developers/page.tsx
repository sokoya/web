import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ForDevelopersHero } from "./_components/ForDevelopersHero";
import { WhoBuildsSection } from "./_components/WhoBuildsSection";
import { DevelopersCanDoSection } from "./_components/DevelopersCanDoSection";
import StartBuilding from "../_components/startBuilding";

export const metadata: Metadata = {
	title: "For Developers",
	description: "Explore Payscribe APIs and build payment experiences with modern developer tooling.",
	keywords: ["Payscribe", "developers", "API", "SDK", "payments", "fintech", "integration"],
};

export default function ForDevelopersPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav />
			<ForDevelopersHero />
			<WhoBuildsSection />
			<DevelopersCanDoSection />
			<StartBuilding />
			<Footer />
		</div>
	);
}
