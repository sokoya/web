import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { CaseStudiesHero } from "./_components/CaseStudiesHero";
import FintechSection from "./_components/FintechSection";
import ExploreCaseStudies from "./_components/ExploreCaseStudies";
import StartBuilding from "../_components/startBuilding";

export const metadata: Metadata = {
	title: "Case Studies",
	description: "Explore how businesses build and scale with Payscribe’s payment infrastructure.",
	keywords: ["Payscribe", "case studies", "customers", "fintech", "payments", "API"],
};

export default function CaseStudiesPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<CaseStudiesHero />
			<FintechSection />
			<ExploreCaseStudies />
			<StartBuilding />
			<Footer />
		</div>
	);
}
