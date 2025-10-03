import React from "react";
import ProyectsEmpty from "../proyectsEmpty";
import ProyectCard from "@/components/ui/ProyectCard";

type ProyectsGridProps = {
  proyects: Project[];
};

export default function ProyectsGrid({
  proyects,
}: ProyectsGridProps ): React.ReactElement {
  return (
    <section className="pb-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyects.map((project, index) => (
            <ProyectCard key={index} project={project} />
          ))}
        </div>

        {proyects.length === 0 && (
          <ProyectsEmpty/>
        )}
      </div>
    </section>
  );
}