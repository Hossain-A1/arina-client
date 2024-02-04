import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"],weight:['100','200','300','400','500','600','700','800','900'] });

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
      <body className={cn(inter.className, 'bg-white text-black antialiased')}>
       <ReduxProvider>
       <Toaster/>
        <Navber />
        {children}
        <Footer />
       </ReduxProvider>
      </body>
    </html>
  );
}
