import FlashSell from "./_components/FlashSell";
import Banner from "./_components/Banner";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="lg:flex lg:gap-3 mt-3">
      <div className="hidden lg:block">
        <Menu />
      </div>
      <div>
        <Banner />
        <FlashSell />
        <FlashSell />
        <FlashSell />
      </div>
    </main>
  );
}
