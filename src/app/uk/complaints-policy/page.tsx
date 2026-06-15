import type { Metadata } from "next";
import { ComplaintPolicyHero } from "@/app/complaints-policy/_components/ComplaintPolicyHero";
import { ComplaintsPolicyContent } from "@/app/complaints-policy/_components/ComplaintPolicyContent";

export const metadata: Metadata = {
	title: "Complaints Policy",
	description: "Read Payscribe’s complaints policy and how we handle complaints.",
	keywords: [
		"Payscribe",
		"Payscribe Customers",
		"complaints policy",
		"complaints",
		"customer service",
		"support",
	],
};

export default function UkComplaintsPolicyPage() {
	return (
		<div className='bg-white'>
			<ComplaintPolicyHero />
			<ComplaintsPolicyContent />
		</div>
	);
}
