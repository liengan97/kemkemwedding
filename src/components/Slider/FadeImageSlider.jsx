"use client";
import React, { useState, useEffect } from "react";
import { fzPhotograph } from "@/utils/font.util";
import * as styles from "./styles.module.css";
import useEventPassed from "@/hooks/useEventPassed";

function FadeImageSlider({ photos = [] }) {
  const isEventPassed = useEventPassed();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative min-h-[100vh] w-screen bg-black min-h-[-webkit-fill-available]">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-full w-full bg-cover transition-opacity duration-[2000ms] bg-center ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${photo.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <div className="absolute inset-0 flex items-center justify-end lg:justify-center flex-col">
            <div className="flex px-5 pb-10">
              <h1
                className={`text-white text-lg md:text-4xl lg:text-5xl text-center ${fzPhotograph.className} ${styles.title}`}
              >
                Thank You!
              </h1>
            </div>
            <div className="lg:pt-20 pb-50">
              <p className="text-sm md:text-xl lg:text-2xl font-light text-white text-center">
                Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng
                tôi.
              </p>
              <p className="text-sm md:text-xl pt-4 lg:text-2xl font-light text-white text-center">
                Chân thành cảm ơn!
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FadeImageSlider;
