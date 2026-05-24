import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { AcceptableUsePolicyHero } from "./_components/AcceptableUsePolicyHero";
import { AcceptableUsePolicyContent } from "./_components/AcceptableUsePolicyContent";

export const metadata: Metadata = {
	title: "Acceptable Use Policy",
	description: "Read Payscribe’s acceptable use policy and how we govern the use of our platform.",
	keywords: ["Payscribe", "Payscribe Customers", "acceptable use policy", "terms and conditions", "customer service", "support"],
};	

export default function AcceptableUsePolicyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<AcceptableUsePolicyHero />
			<AcceptableUsePolicyContent />
			<Footer />
		</div>
	);
}

