import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { TermsAndConditionsHero } from "@/app/terms-and-conditions/_components/TermsAndConditionsHero";
import { ExtractedTermsContent } from "@/app/terms-and-conditions/_components/ExtractedTermsContent";
import { ukTerms } from "@/app/terms-and-conditions/_content/uk";

export const metadata: Metadata = createPageMetadata({
	path: "/uk/terms-and-conditions",
	title: "UK Terms and Conditions",
	description: "Read the terms and conditions for services provided by Payscribe Limited in the United Kingdom.",
	keywords: ["Payscribe", "terms", "terms and conditions", "legal", "compliance"],
	languages: { "en-GB": "/uk/terms-and-conditions", "en-NG": "/terms-and-conditions" },
});

export default function UkTermsAndConditionsPage() {
	return (
		<div className='bg-white'>
			<TermsAndConditionsHero region='United Kingdom' version='1.0' />
			<ExtractedTermsContent
				jurisdiction='United Kingdom'
				entity='Payscribe Limited (Company No. 17196544)'
				version='1.0'
				source={ukTerms}
			/>
		</div>
	);
}
