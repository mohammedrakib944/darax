"use client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const FixedRating = ({ rate, count = 3 }) => {
  return (
    <div className="flex items-center gap-1 pt-1">
      <Rating
        className="mt-[2px] text-secondary text-xs"
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiFillStar />}
        initialRating={rate}
        readonly
      />
      <span className="text-xs text-gray-400">
        {count && "(" + count + ")"}
      </span>
    </div>
  );
};

export default FixedRating;
