import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	path: "/book-a-demo",
  title: "Book a demo",
  description: "Book a demo with Payscribe to see how our payment infrastructure fits your business.",
  keywords: ["Payscribe", "book a demo", "demo", "payments", "fintech", "API"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

