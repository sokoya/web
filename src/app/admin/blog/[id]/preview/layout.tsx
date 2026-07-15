import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview Blog Post",
  description: "Preview a blog post in the Payscribe admin portal.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
