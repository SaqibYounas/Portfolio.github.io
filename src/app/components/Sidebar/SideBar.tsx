'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CarouselProps } from '../../types/other/sidebar';

export default function Carousel({
  images,
  altPrefix = 'Carousel Image',
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      className="relative mx-auto w-full overflow-hidden rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={images[current]}
        alt={`${altPrefix} ${current + 1}`}
        width={1200}
        height={600}
        className="h-auto w-full rounded-2xl object-cover transition-all duration-700 ease-in-out"
      />

      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
      >
        &#10095;
      </button>
    </motion.div>
  );
}
