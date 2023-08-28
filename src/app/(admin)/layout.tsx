import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darax (Admin)",
  description: "By Mohammad Rakib",
};

interface Ichildren {
  children: React.ReactNode;
}

const layout: React.FC<Ichildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p>Dashboard Loayout</p>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
};

export default layout;
