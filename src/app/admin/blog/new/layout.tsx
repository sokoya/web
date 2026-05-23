import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Blog Post",
  description: "Create a new blog post in the Payscribe admin portal.",
  keywords: ["Payscribe", "admin", "blog", "create"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

