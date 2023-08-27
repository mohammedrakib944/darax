"use client";
import React from "react";
import { Rating, Star } from "@smastrom/react-rating";

type TRatingProps = {
  rate: number;
  count: number;
};

// Declare it outside your component so it doesn't get re-created
const starStyle = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const FixedRating: React.FC<TRatingProps> = ({ rate, count = 3 }) => {
  return (
    <div className="flex items-center gap-1 pt-1">
      <Rating
        className="max-w-[65px] text-secondary"
        itemStyles={starStyle}
        value={rate}
        readOnly
      />
      <span className="text-xs text-gray-400 mt-[1px]">
        {count && "(" + count + ")"}
      </span>
    </div>
  );
};

export default FixedRating;
