import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ComplaintPolicyHero } from "./_components/ComplaintPolicyHero";
import { ComplaintsPolicyContent } from "./_components/ComplaintPolicyContent";

export const metadata: Metadata = {
	title: "Complaints Policy",
	description: "Read Payscribe’s complaints policy and how we handle complaints.",
	keywords: ["Payscribe", "Payscribe Customers", "complaints policy", "complaints", "customer service", "support"],
};	

export default function ComplaintsPolicyPage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav variant='white' />
			<ComplaintPolicyHero />
			<ComplaintsPolicyContent />
			<Footer />
		</div>
	);
}

