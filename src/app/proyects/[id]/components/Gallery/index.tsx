import { Card } from "@/components/ui/card";
import React from "react";

type GalleryProps = {
  project: Project;
}

export default function Gallery({
  project,
}: GalleryProps ): React.ReactElement {

  //TODO: Implement a lightbox to view the screenshots in full size
  
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6">Project Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.pageContent.images.map((screenshot) => (
            <Card key={screenshot.id} className="overflow-hidden border-stone-700 hover:border-emerald-600/50 transition-all hover:scale-105">
              <div className={`relative h-64 bg-gradient-to-br ${screenshot.color} flex items-center justify-center`} style={{ backgroundImage: `url(${screenshot.url})`, backgroundSize: "cover", }}>
                <span className="absolute bottom-2 left-4 text-emerald-600 text-2xl font-bold">{screenshot.title}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}