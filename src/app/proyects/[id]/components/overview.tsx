import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

type OverviewProps = {
  project:Project;
}

export default function Overview({
  project,
}:OverviewProps): React.ReactElement {
  return (
    <section className="py-16 px-6 bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
        <p className="text-lg text-stone-300 leading-relaxed mb-8">
          {project.pageContent?.overview || "No overview available."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <Card className="bg-stone-800 border-stone-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-emerald-900/50 text-emerald-300 border-emerald-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="bg-stone-800 border-stone-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Challenges</h3>
              <ul className="space-y-2 text-stone-300">
                {project.pageContent.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
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