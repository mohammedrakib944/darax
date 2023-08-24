import Navbar from "@/layouts/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DarazPro",
  description: "By Mohammad Rakib",
};

export default function RootLayout({ children }) {
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
