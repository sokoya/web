import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ReportTransactionForm } from "./_components/ReportTransactionForm";

export const metadata: Metadata = createPageMetadata({
	path: "/report-transaction",
	title: "Report a transaction",
	description:
		"Report a delayed, incorrect, unauthorised, or unrecognised Payscribe transaction. We’ll look it up and get back to you.",
	keywords: [
		"Payscribe",
		"report transaction",
		"dispute",
		"fraud",
		"failed transaction",
		"delayed payment",
	],
});

export default function ReportTransactionPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<ReportTransactionForm />
			<Footer />
		</div>
	);
}
