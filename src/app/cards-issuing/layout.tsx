import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cards Issuing",
  description: "Issue USD/NGN cards and deliver seamless card experiences with Payscribe.",
  keywords: ["Payscribe", "card issuing", "virtual cards", "USD cards", "NGN cards", "fintech", "API"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

