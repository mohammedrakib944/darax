import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import FixedRating from "./FixedRating";

type TCardProps = {
  img: StaticImageData;
  name: string;
  price: number;
  prev: number;
  rating: number;
  count: number;
};

const Card: React.FC<TCardProps> = (props) => {
  const { img, name, price, prev, rating, count } = props;
  return (
    <div className="min-w-[150px] max-w-[390px] border overflow-hidden hover:shadow-lg rounded-lg">
      <Link href="#">
        <Image
          className="w-full h-[130px] object-cover cursor-pointer duration-200"
          src={img}
          alt="Camera"
        />
      </Link>
      <div className="p-2 bg-white h-full">
        <div className="text-sm ">
          <div className="min-h-[40px]">
            <Link href="#" className="text-xs font-semibold cursor-pointer">
              {name?.slice(0, 40)}
              {name?.length > 40 && "..."}
            </Link>
          </div>
          <p className="font-bold mt-1 text-primary">${price}</p>
          <p className="line-through text-xs text-gray-600">${prev}</p>
          <FixedRating rate={rating} count={count} />
        </div>
      </div>
    </div>
  );
};

export default Card;
