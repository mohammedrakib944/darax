"use client";
import Image from "next/image";
import Link from "next/link";
import smartPhone from "../assets/products/camera.jpg";

import FixedRating from "./FixedRating";

const Card = ({ product }) => {
  return (
    <div className="min-w-[150px] max-w-[390px] border overflow-hidden hover:shadow-lg rounded-lg">
      <Link href="#">
        <Image
          className="w-full h-[130px] object-cover cursor-pointer duration-200"
          src={product.img}
          width="100%"
          height="100%"
          alt="Camera"
        />
      </Link>
      <div className="p-2 bg-white h-full">
        <div className="text-sm ">
          <div className="min-h-[40px]">
            <Link href="#" className="text-xs font-semibold cursor-pointer">
              {product.name?.slice(0, 40)}
              {product.name?.length > 40 && "..."}
            </Link>
          </div>
          <p className="font-bold mt-1 text-primary">${product.price}</p>
          <p className="line-through text-xs text-gray-600">${product.prev}</p>
          <FixedRating rate={product.rating} count={product.count} />
        </div>
      </div>
    </div>
  );
};

export default Card;
