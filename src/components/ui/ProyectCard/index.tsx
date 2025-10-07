'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Boton from "@/components/ui/Boton";
import { Card, CardContent } from "@/components/ui/card";
import ProyectStatus from "./components/proyectStatus";
import ProyectCategory from "./components/proyectCategory";
import { FiGithub } from "react-icons/fi";
import { twTheme } from "@/utils/ThemeColors";

type ProjectCardProps = {
  project: Omit<Project, "pageContent">;
};


export default function ProyectCard({
  project
}:ProjectCardProps): React.ReactElement {

  const router = useRouter();

  return (
    <Card
      className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 hover:scale-105 cursor-pointer"
      onClick={() => router.push(`/proyects/${project.id}`)}
    >
    
      <div className="h-48 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>

        <ProyectCategory category={project.category} />

      </div>

      {/* Project Content */}
      <CardContent className="p-6">
        <div className="relative">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-50 transition-colors">
            {project.title}
          </h3>

          <ProyectStatus  status={project.status} />

        </div>

        <p className="text-emerald-100 mb-4 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-emerald-800/50 text-emerald-100 px-2 py-1 rounded-md text-xs font-medium border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="bg-emerald-800/50 text-emerald-100 px-2 py-1 rounded-md text-xs font-medium border border-emerald-500/20">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        
        <div className="flex gap-3">
          <Boton
            variant="primary"
            className="flex-1 border-emerald-300 text-emerald-100 hover:bg-emerald-800/50 hover:text-white transition-all bg-transparent"
            label={project.status === "In Progress" || project.status === "Planned" ? "Coming Soon" : "Visit project"}
            isExternal
            route={project.link}
            disabled={project.status === "In Progress" || project.status === "Planned"}
          >
          </Boton>
          {project.github && (
            <Boton
              variant="primary"
              className="border-emerald-300 text-emerald-100 hover:bg-emerald-800/50 hover:text-white transition-all bg-transparent"
              label="GitHub"
              isExternal
              route={project.github}
            >
              <FiGithub size={20} color={twTheme.colors.emerald[100]}/>
            </Boton>
          )}
        </div>
      </CardContent>
    </Card>
  );
}