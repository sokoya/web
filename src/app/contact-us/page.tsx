import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ContactUsHero } from "./_components/ContactUsHero";

export const metadata: Metadata = {
	title: "Contact us",
	description: "Contact Payscribe for support, sales, or partnership inquiries.",
	keywords: ["Payscribe", "contact", "support", "sales", "partnership", "fintech"],
};

export default function ContactUsPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<ContactUsHero />
			<Footer />
		</div>
	);
}
