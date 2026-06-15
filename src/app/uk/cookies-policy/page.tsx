import type { Metadata } from "next";
import { CookiesPolicyHero } from "@/app/cookies-policy/_components/CookiesPolicyHero";
import { CookiesPolicyContent } from "@/app/cookies-policy/_components/CookiesPolicyContent";

export const metadata: Metadata = {
	title: "Cookies Policy",
	description: "Read Payscribe’s cookies policy and how we use cookies on our website.",
	keywords: ["Payscribe", "cookies policy", "cookies", "data protection", "compliance"],
};

export default function UkCookiesPolicyPage() {
	return (
		<div className='bg-white'>
			<CookiesPolicyHero />
			<CookiesPolicyContent />
		</div>
	);
}
