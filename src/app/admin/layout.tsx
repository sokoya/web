import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Payscribe Admin Portal",
  keywords: ["Payscribe", "admin", "dashboard"],
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}

