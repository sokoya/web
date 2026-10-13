import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin Transaction Reports",
	description: "Review and manage transaction reports from the public report form.",
	keywords: ["Payscribe", "admin", "transaction reports", "disputes"],
	robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
