"use client";

import { Card } from "@/components/ui/card";
import React, { useState } from "react";

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
                className={`relative h-64 bg-gradient-to-br ${screenshot.color} flex items-center justify-center`}
                style={{ backgroundImage: `url(${screenshot.url})`, backgroundSize: "cover" }}
              >
                <span className="absolute bottom-2 left-4 text-emerald-600 text-2xl font-bold">
                  {screenshot.title}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <button
              className="absolute left-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>
            <img
              src={project.pageContent.images[lightboxIndex].url}
              alt={project.pageContent.images[lightboxIndex].title}
              className="max-h-[90%] max-w-[90%] rounded-md shadow-lg"
            />
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
}
