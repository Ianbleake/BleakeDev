import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

type OverviewProps = {
  project:Project;
}

export default function Overview({
  project,
}:OverviewProps): React.ReactElement {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6">Project Overview</h2>
        <p className="text-lg text-stone-300 leading-relaxed mb-8">
          {project.pageContent?.overview || "No overview available."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 p-0">
            <CardHeader className="border-b border-emerald-600/30 shadow-xl py-4  bg-gradient-to-br from-emerald-600 to-emerald-700">
            <h3 className="text-xl font-bold text-white">Tech Stack</h3>
            </CardHeader>
            <CardContent className="p-6">
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-emerald-900/50 text-white border-white/30 shadow-lg px-3 py-1 text-sm font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          
          <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 p-0">
            <CardHeader className="border-b border-emerald-600/30 shadow-xl py-4  bg-gradient-to-br from-emerald-600 to-emerald-700">
              <h3 className="text-xl font-bold text-white">Key Challenges</h3>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2 text-white">
                {project.pageContent.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}