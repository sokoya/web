import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FaqHero } from "./_components/FaqHero";
import { FaqAccordion } from "./_components/FaqAccordion";
import { faqs } from "./_components/faqData";
import { StructuredData } from "@/app/_components/StructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/faqs",
	title: "FAQs",
	description: "Frequently asked questions about Payscribe products, pricing, and integrations.",
	keywords: ["Payscribe", "FAQ", "help", "support", "payments", "API"],
});

export default function FaqsPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<StructuredData
				data={{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: faqs.map((item) => ({
						"@type": "Question",
						name: item.question,
						acceptedAnswer: { "@type": "Answer", text: item.answer },
					})),
				}}
			/>
			<Nav />
			<FaqHero />
			<FaqAccordion />
			<Footer />
		</div>
	);
}
