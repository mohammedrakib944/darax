"use client";
import React from "react";
import Cover1 from "../../../assets/covers/cover.jpg";
import Cover2 from "../../../assets/covers/cover2.jpg";
import Cover3 from "../../../assets/covers/cover3.jpg";

// Custom Slider
import ImageSlider from "@/layouts/slider/ImageSlider";

const sliderImages = [Cover1, Cover2, Cover3];

const Banner = () => {
  return (
    <div className="w-full">
      <ImageSlider sliderImages={sliderImages} delay={2500} />
    </div>
  );
};

export default Banner;
