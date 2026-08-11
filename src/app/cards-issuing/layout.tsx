import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ServiceStructuredData } from "@/app/_components/ServiceStructuredData";

export const metadata: Metadata = createPageMetadata({
	path: "/cards-issuing",
  title: "Cards Issuing",
  description: "Issue USD/NGN cards and deliver seamless card experiences with Payscribe.",
  keywords: ["Payscribe", "card issuing", "virtual cards", "USD cards", "NGN cards", "fintech", "API"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceStructuredData name='Card issuing' description={metadata.description as string} path='/cards-issuing' />
      {children}
    </>
  );
}
