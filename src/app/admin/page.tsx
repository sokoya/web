import type { Metadata } from "next";
import AdminDashboardClient from "./_pages/AdminDashboardClient";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing blog posts, press, and contact submissions.",
  keywords: ["Payscribe", "admin", "dashboard"],
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}

