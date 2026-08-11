import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { TermsAndConditionsHero } from "@/app/terms-and-conditions/_components/TermsAndConditionsHero";
import { TermsAndConditionsContent } from "@/app/terms-and-conditions/_components/TermsAndConditionsContent";

export const metadata: Metadata = createPageMetadata({
	path: "/uk/terms-and-conditions",
	title: "Terms and Conditions",
	description: "Read Payscribe's terms and conditions for using our platform and services.",
	keywords: ["Payscribe", "terms", "terms and conditions", "legal", "compliance"],
});

export default function UkTermsAndConditionsPage() {
	return (
		<div className='bg-white'>
			<TermsAndConditionsHero />
			<TermsAndConditionsContent />
		</div>
	);
}
