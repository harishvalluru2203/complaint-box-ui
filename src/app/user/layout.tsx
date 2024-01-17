import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ul>
        <li>
          <Link href="/user/list">User List</Link>
        </li>
        <li>
          <Link href="/user/registration">User Registration</Link>
        </li>
      </ul>
      {children}
    </section>
  );
}
