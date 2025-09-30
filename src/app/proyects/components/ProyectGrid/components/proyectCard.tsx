import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";

type ProyectCardProps = {
  proyect: Project;
}

export default function ProyectCard({
  proyect
}:ProyectCardProps): React.ReactElement {
  return (
    <Card
      className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 hover:scale-105 cursor-pointer"
    >
      {/* Project Image/Header */}
      <div className={`h-48 ${proyect.image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
            {proyect.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/60 text-sm font-medium mb-1">
            {proyect.category}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-50 transition-colors">
          {proyect.title}
        </h3>
        <p className="text-emerald-100 mb-4 leading-relaxed text-sm line-clamp-3">
          {proyect.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {proyect.tech.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-emerald-800/50 text-emerald-100 px-2 py-1 rounded-md text-xs font-medium border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
          {proyect.tech.length > 4 && (
            <span className="bg-emerald-800/50 text-emerald-100 px-2 py-1 rounded-md text-xs font-medium border border-emerald-500/20">
              +{proyect.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="primary"
            className="flex-1 border-emerald-300 text-emerald-100 hover:bg-emerald-800/50 hover:text-white transition-all bg-transparent"
            label="Live Demo"
          >
          </Button>
          <Button
            variant="primary"
            className="border-emerald-300 text-emerald-100 hover:bg-emerald-800/50 hover:text-white transition-all bg-transparent"
            label="GitHub"
          >
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}