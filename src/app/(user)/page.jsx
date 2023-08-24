import Banner from "@/app/(user)/_components/Banner";
import Menu from "@/components/Menu";
import Link from "next/link";
import FlashSell from "./_components/FlashSell";

export default function Home() {
  return (
    <main className="lg:flex lg:gap-3 mt-3">
      <div className="hidden lg:block">
        <Menu />
      </div>
      {/* main */}
      <div>
        <Banner />
        <FlashSell />
        <FlashSell />
        <FlashSell />
        <FlashSell />
      </div>
    </main>
  );
}
