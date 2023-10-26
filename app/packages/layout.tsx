import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arina | Packages ",
  description: "our packages",
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
