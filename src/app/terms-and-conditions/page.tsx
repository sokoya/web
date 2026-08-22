import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { TermsAndConditionsHero } from "./_components/TermsAndConditionsHero";
import { ExtractedTermsContent } from "./_components/ExtractedTermsContent";
import { nigeriaTerms } from "./_content/nigeria";

export const metadata: Metadata = createPageMetadata({
	path: "/terms-and-conditions",
	title: "Nigeria Terms and Conditions",
	description: "Read the terms and conditions for services provided by Pscribe Digital Services Limited in Nigeria.",
	keywords: ["Payscribe", "terms", "terms and conditions", "legal", "compliance"],
	languages: { "en-NG": "/terms-and-conditions", "en-GB": "/uk/terms-and-conditions" },
});

export default function TermsAndConditionsPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<TermsAndConditionsHero region='Nigeria' version='3.0' />
			<ExtractedTermsContent
				jurisdiction='Nigeria'
				entity='Pscribe Digital Services Limited (RC1946239)'
				version='3.0'
				source={nigeriaTerms}
			/>
			<Footer />
		</div>
	);
}
