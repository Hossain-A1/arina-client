import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to arina home",
  description: "Arina is beauty parller and spa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className,"bg-light, text-dark antialiased" )}>
        <Navber />
        {children}
      <Footer />
      </body>
    </html>
  );
}
