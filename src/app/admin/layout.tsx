import type { Metadata } from "next";
import AdminDashboardHeader from "../admin-dashboard-header";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AdminDashboardHeader />
      {children}
    </section>
  );
}
