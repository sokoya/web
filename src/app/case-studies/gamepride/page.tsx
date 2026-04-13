import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { GameprideHero } from "./_components/GameprideHero";
import { GameprideContentSection } from "./_components/GameprideContentSection";
import StartBuilding from "@/app/_components/startBuilding";

export const metadata: Metadata = {
	title: "Gamepride Case Study",
	description: "A case study on how Gamepride leveraged Payscribe to build better payment experiences.",
	keywords: ["Payscribe", "Gamepride", "case study", "payments", "fintech"],
};

export default function GameprideCaseStudyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<GameprideHero />
			<GameprideContentSection />
			<StartBuilding />
			<Footer />
		</div>
	);
}
