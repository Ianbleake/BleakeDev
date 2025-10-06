"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { merge } from "@/utils/mergeStyles";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

type GalleryProps = {
  project: Project;
};

export default function Gallery({ project }: GalleryProps): React.ReactElement {

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.pageContent.images.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + project.pageContent.images.length) % project.pageContent.images.length
      );
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-emerald-600 mb-6">Project Screenshots</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.pageContent.images.map((screenshot, index) => (
            <Card
              key={screenshot.id}
              className="overflow-hidden border-stone-700 hover:border-emerald-600/50 transition-all hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div
                className={merge('relative h-64 bg-gradient-to-br flex items-center justify-center',screenshot.color)}
                style={{ backgroundImage: `url(${screenshot.url})`, backgroundSize: "cover" }}
              >
                <span className="absolute bottom-2 left-4 text-emerald-600 text-2xl font-bold">
                  {screenshot.title}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-emerald-500/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <button
              className="absolute left-4 md:left-0 lg:left-4 text-white text-3xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <GoChevronLeft size={45} className="text-emerald-300 md:text-white" />
            </button>
            <Image
              src={project.pageContent.images[lightboxIndex].url}
              alt={project.pageContent.images[lightboxIndex].title}
              className="max-h-[90%] max-w-[90%] rounded-md shadow-lg"
              width={1200}
              height={600}
              style={{ width: 'auto', height: 'auto' }}
            />
            <button
              className="absolute right-4 md:right-0 lg:right-4 text-white text-3xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <GoChevronRight size={45} className="text-emerald-300 md:text-white" />
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
}
