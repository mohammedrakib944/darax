import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DarazPro (Admin)",
  description: "By Mohammad Rakib",
};

const layout = ({ children }) => {
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
