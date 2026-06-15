import type { Metadata } from "next";
import { AcceptableUsePolicyHero } from "@/app/acceptable-use-policy/_components/AcceptableUsePolicyHero";
import { AcceptableUsePolicyContent } from "@/app/acceptable-use-policy/_components/AcceptableUsePolicyContent";

export const metadata: Metadata = {
	title: "Acceptable Use Policy",
	description:
		"Read Payscribe’s acceptable use policy and how we govern the use of our platform.",
	keywords: [
		"Payscribe",
		"Payscribe Customers",
		"acceptable use policy",
		"terms and conditions",
		"customer service",
		"support",
	],
};

export default function UkAcceptableUsePolicyPage() {
	return (
		<div className='bg-white'>
			<AcceptableUsePolicyHero />
			<AcceptableUsePolicyContent />
		</div>
	);
}
