import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { PrivacyPolicyHero } from "@/app/privacy-policy/_components/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "@/app/privacy-policy/_components/PrivacyPolicyContent";

export const metadata: Metadata = createPageMetadata({
	path: "/uk/privacy-policy",
	title: "Privacy Policy",
	description: "Read Payscribe’s privacy policy and how we handle personal data.",
	keywords: ["Payscribe", "privacy policy", "privacy", "data protection", "compliance"],
});

export default function UkPrivacyPolicyPage() {
	return (
		<div className='bg-white'>
			<PrivacyPolicyHero />
			<PrivacyPolicyContent />
		</div>
	);
}
