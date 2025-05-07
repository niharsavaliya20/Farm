"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/farm_img5.jpeg";
import logo1 from "../../assets/farm_img6.jpeg";
import logo2 from "../../assets/farm_img7.jpeg";
import logo3 from "../../assets/farm_img8.jpeg";
import logo4 from "../../assets/farm_img2.jpg";
import logo5 from "../../assets/farm_img9.jpg";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Photos = () => {
  const images = [logo, logo1, logo2, logo3,logo4,logo5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <>
      <section className="bg-white mt-16">
        <div id="photos-section" className="max-w-[1300px] bg-white mx-auto p-10">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            {/* Main Image Container */}
            <div className="relative h-120 md:h-[600px] w-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Farm image ${index + 5}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority={index === currentIndex}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "border-2 border-primary scale-110" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 5}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Photos;