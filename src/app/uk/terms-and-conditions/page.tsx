import type { Metadata } from "next";
import { TermsAndConditionsHero } from "@/app/terms-and-conditions/_components/TermsAndConditionsHero";
import { TermsAndConditionsContent } from "@/app/terms-and-conditions/_components/TermsAndConditionsContent";

export const metadata: Metadata = {
	title: "Terms and Conditions",
	description: "Read Payscribe's terms and conditions for using our platform and services.",
	keywords: ["Payscribe", "terms", "terms and conditions", "legal", "compliance"],
};

export default function UkTermsAndConditionsPage() {
	return (
		<div className='bg-white'>
			<TermsAndConditionsHero />
			<TermsAndConditionsContent />
		</div>
	);
}
