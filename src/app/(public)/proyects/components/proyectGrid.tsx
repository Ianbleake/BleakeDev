"use client";

import React from "react";
import ProyectsEmpty from "./proyectsEmpty";
import ProyectCard from "@/components/ui/ProyectCard";
import { useProjectsStorage } from "@/storage/projectsStorage";


export default function ProyectsGrid(): React.ReactElement {
  const { projects, selectedCategory } = useProjectsStorage();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="pb-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProyectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <ProyectsEmpty />
        )}
      </div>
    </section>
  );
}
