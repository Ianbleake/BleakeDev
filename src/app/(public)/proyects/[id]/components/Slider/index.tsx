"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "@/components/ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface ProjectGalleryProps {
  images: Screenshot[];
}

export default function Slider({ images }: ProjectGalleryProps) {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6">
          Project Screenshots
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Card className="bg-transparent border-none">
                <div className="flex justify-center bg-gray-600/30 border border-emerald-600 shadow-md rounded-2xl py-8 h-94 md:h-auto">
                  <Image
                    src={image.url}
                    alt={image.title || `Screenshot ${idx + 1}`}
                    className="rounded-xl max-h-[600px] object-contain mx-auto"
                    width={800}
                    height={600}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
