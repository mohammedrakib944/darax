import React from "react";
import Card from "@/components/Card";
import { flashSeal } from "@/Data/products";

const FlashSell: React.FC = () => {
  return (
    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {flashSeal.map((product, index) => (
        <React.Fragment key={index}>
          <Card {...product} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlashSell;
