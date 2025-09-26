import React from "react";
import { skills } from "@/content/skills";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills(): React.ReactElement {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-stone-300">
            Constantly learning and adapting to the latest technologies and best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-emerald-600 to-emerald-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-100/30 transition-colors border border-emerald-400/30">
                    <skill.icon className="text-emerald-100" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-emerald-800/50 text-emerald-100 px-3 py-2 rounded-lg text-sm font-medium text-center border border-emerald-500/20">
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}