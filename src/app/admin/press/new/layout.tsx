import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Press Item",
  description: "Create a new press item (external link).",
  keywords: ["Payscribe", "admin", "press", "create"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

