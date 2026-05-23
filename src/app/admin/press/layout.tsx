import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Press",
  description: "Manage external press links and featured articles.",
  keywords: ["Payscribe", "admin", "press", "media"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

