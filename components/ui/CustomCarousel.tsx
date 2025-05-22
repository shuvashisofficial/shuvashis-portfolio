"use client";

import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CustomCarouselProps {
  children: ReactNode;
}

export default function CustomCarousel({ children }: CustomCarouselProps) {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      rewind={false}           // Keeps sliding in a loop
      shouldResetAutoplay={false} // Prevents reset and keeps it continuous
      pauseOnHover={false}     // Disables pausing when hovered
    >
      {children}
    </Carousel>
  );
}
