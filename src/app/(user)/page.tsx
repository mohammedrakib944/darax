import FlashSell from "./_components/FlashSell";
import Banner from "./_components/Banner";
import Menu from "@/components/Menu";
import Category from "./_components/Category";

export default function Home() {
  return (
    <main className="lg:flex lg:gap-3 mt-3">
      <div className="hidden lg:block">
        <Menu />
      </div>
      <div>
        <Banner />
        <div className="mt-6">
          <h2 className="text-accent">FlashSale</h2>
          <FlashSell />
        </div>
        <Category />
        <div className="mt-6">
          <h2 className="text-accent">For you</h2>
          <FlashSell />
          <FlashSell />
          <FlashSell />
        </div>
      </div>
    </main>
  );
}
