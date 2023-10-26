import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arina | Package ",
  description: "our packages",
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
