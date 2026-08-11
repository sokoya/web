import type { Metadata } from "next";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { GameprideHero } from "./_components/GameprideHero";
import { GameprideContentSection } from "./_components/GameprideContentSection";
import StartBuilding from "@/app/_components/startBuilding";
import { StructuredData } from "@/app/_components/StructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/case-studies/gamepride",
	title: "Gamepride Case Study",
	description: "A case study on how Gamepride leveraged Payscribe to build better payment experiences.",
	keywords: ["Payscribe", "Gamepride", "case study", "payments", "fintech"],
});

export default function GameprideCaseStudyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<StructuredData
				data={[
					{
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "How Gamepride built better payment experiences with Payscribe",
						description: metadata.description as string,
						mainEntityOfPage: absoluteUrl("/case-studies/gamepride"),
						author: { "@type": "Organization", name: "Payscribe" },
						publisher: { "@type": "Organization", name: "Payscribe" },
					},
					{
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
							{ "@type": "ListItem", position: 2, name: "Case studies", item: absoluteUrl("/case-studies") },
							{ "@type": "ListItem", position: 3, name: "Gamepride", item: absoluteUrl("/case-studies/gamepride") },
						],
					},
				]}
			/>
			<Nav variant='white' />
			<GameprideHero />
			<GameprideContentSection />
			<StartBuilding />
			<Footer />
		</div>
	);
}
