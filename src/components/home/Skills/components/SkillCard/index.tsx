import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import TechCard from "./components/techCard";

type SkillCardProps = {
  skill: Skill;
}

export default function SkillCard({
  skill,
}:SkillCardProps ): React.ReactElement {
  return (
    <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-emerald-600 to-emerald-700">
      <CardContent className="p-8">

        <div className="flex items-center mb-6">

          <div className="w-12 h-12 bg-emerald-100/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-100/30 transition-colors border border-emerald-400/30">
            <skill.icon className="text-emerald-100" size={24} />
          </div>

          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
          
        </div>

        <div className="grid grid-cols-2 gap-3">
          {skill.technologies.map((tech, techIndex) => (
            <TechCard key={techIndex} tech={tech} />
          ))}
        </div>

      </CardContent>
    </Card>
  );
}