import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "next/image";
import "./slider.css";

interface ImageSliderProps {
  sliderImages: StaticImageData[]; // string[] -> on only react.js
  delay: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ sliderImages, delay }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [sliderImages, isPaused]);

  return (
    <div
      className="slider rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPaused && (
        <span className="paused">
          <AiOutlinePlayCircle />
        </span>
      )}
      <Image src={sliderImages[currentSlide]} alt={`Slide ${currentSlide}`} />
      <div className="pagination-dots">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
