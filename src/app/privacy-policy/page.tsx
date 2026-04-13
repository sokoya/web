import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { PrivacyPolicyHero } from "./_components/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "./_components/PrivacyPolicyContent";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Read Payscribe’s privacy policy and how we handle personal data.",
	keywords: ["Payscribe", "privacy policy", "privacy", "data protection", "compliance"],
};

export default function PrivacyPolicyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<PrivacyPolicyHero />
			<PrivacyPolicyContent />
			<Footer />
		</div>
	);
}

