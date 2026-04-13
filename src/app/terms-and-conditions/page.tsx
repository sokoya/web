import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { TermsAndConditionsHero } from "./_components/TermsAndConditionsHero";
import { TermsAndConditionsContent } from "./_components/TermsAndConditionsContent";

export const metadata: Metadata = {
	title: "Terms and Conditions",
	description: "Read Payscribe’s terms and conditions for using our platform and services.",
	keywords: ["Payscribe", "terms", "terms and conditions", "legal", "compliance"],
};

export default function TermsAndConditionsPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<TermsAndConditionsHero />
			<TermsAndConditionsContent />
			<Footer />
		</div>
	);
}

