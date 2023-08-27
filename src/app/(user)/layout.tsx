import Navbar from "@/layouts/Navbar";
import "../globals.css";
import "@smastrom/react-rating/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darax",
  description: "By Mohammad Rakib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="lg:max-w-[1188px] mx-auto px-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
