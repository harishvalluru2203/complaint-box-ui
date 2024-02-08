import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
