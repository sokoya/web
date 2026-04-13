import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog Post",
  description: "Edit an existing blog post in the Payscribe admin portal.",
  keywords: ["Payscribe", "admin", "blog", "edit"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

