import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Contact Submissions",
  description: "Review and manage contact submissions from the public Contact Us form.",
  keywords: ["Payscribe", "admin", "contact submissions", "support"],
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

