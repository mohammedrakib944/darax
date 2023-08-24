"use client";
import Image from "next/image";
import Cover1 from "../../../assets/covers/cover.jpg";
import Cover2 from "../../../assets/covers/cover2.jpg";
import Cover3 from "../../../assets/covers/cover3.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          autoplay: true,
          speed: 800,
          interval: 3000,
        }}
      >
        <SplideSlide>
          <Image
            src={Cover1}
            className="w-full"
            width="100%"
            height="100%"
            alt="Cover image"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src={Cover2}
            className="w-full"
            width="100%"
            height="100%"
            alt="Cover image"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src={Cover3}
            className="w-full"
            width="100%"
            height="100%"
            alt="Cover image"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Banner;
