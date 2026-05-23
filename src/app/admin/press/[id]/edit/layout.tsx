import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Press Item",
  description: "Edit an existing press item (external link).",
  keywords: ["Payscribe", "admin", "press", "edit"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

