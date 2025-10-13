"use client";

import React from "react";
import ProyectCard from "@/components/ui/ProyectCard";
import { useProjectsStorage } from "@/storage/projectsStorage";

export default function ProjectsSection(): React.ReactElement {

  const { projects } = useProjectsStorage();

  return (
    <section id="work" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-xl text-stone-300">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProyectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
