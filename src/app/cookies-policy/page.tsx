import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { CookiesPolicyHero } from "./_components/CookiesPolicyHero";
import { CookiesPolicyContent } from "./_components/CookiesPolicyContent";

export const metadata: Metadata = {
	title: "Cookies Policy",
	description: "Read Payscribe’s cookies policy and how we use cookies on our website.",
	keywords: ["Payscribe", "cookies policy", "cookies", "data protection", "compliance"],
};

export default function CookiesPolicyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<CookiesPolicyHero />
			<CookiesPolicyContent />
			<Footer />
		</div>
	);
}

