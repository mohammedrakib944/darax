import Navbar from "@/layouts/Navbar";
import React from "react";
import "../globals.css";
import "@smastrom/react-rating/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/layouts/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darax",
  description: "By Mohammad Rakib",
};

interface Ichildren {
  children: React.ReactNode;
}

const RootLayout: React.FC<Ichildren> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="lg:max-w-[1300px] mx-auto px-3">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
};
export default RootLayout;
