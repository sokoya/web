import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Blog",
  description: "Manage blog posts: create, edit, publish, and delete.",
  keywords: ["Payscribe", "admin", "blog", "CMS"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

