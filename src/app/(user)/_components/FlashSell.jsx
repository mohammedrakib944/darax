import React from "react";
import Card from "@/components/Card";
import { flashSeal } from "@/Data/Home";

const FlashSell = () => {
  return (
    <div className="mt-6">
      <h2 className="text-accent">FlashSale</h2>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {flashSeal.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSell;
