import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/proyects";
import React from "react";

export default function Proyects(): React.ReactElement {
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
              <Card key={index} className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700">
                <div style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }} className="h-48 bg-gradient-to-br from-emerald-700 to-emerald-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" ></div>

                  <div className="absolute bottom-4 left-4 text-emerald-600">
                    <div className="text-2xl font-bold opacity-40">
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <div className="absolute bottom-1 right-1 z-20">
                      <span className="bg-emerald-400/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-emerald-100 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-emerald-800/50 text-emerald-100 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button isExternal={project.isExternal} route={project.link !== "#" ? project.link : `/proyects/${project.id}`} isLink={!project.isExternal} label="View Project" variant="primary" className="w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
}