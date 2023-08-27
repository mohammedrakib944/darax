"use client";
import React from "react";
import Image from "next/image";
import Cover1 from "../../../assets/covers/cover.jpg";
import Cover2 from "../../../assets/covers/cover2.jpg";
import Cover3 from "../../../assets/covers/cover3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full relative ">
      <div className="w-full absolute rounded-lg overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image src={Cover1} alt="Awesome" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Cover2} alt="Awesome" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Cover3} alt="Awesome" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
