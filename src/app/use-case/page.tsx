import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import UseCaseTabs from "./_components/UseCaseTabs";
import StartBuilding from "../_components/startBuilding";

export const metadata: Metadata = {
	title: "Use case",
	description: "Explore real-world use cases and how Payscribe helps teams ship payments faster.",
	keywords: ["Payscribe", "use case", "payments", "fintech", "API", "business"],
};

export default function UseCasePage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<UseCaseTabs />
			<StartBuilding />
			<Footer />
		</div>
	);
}
