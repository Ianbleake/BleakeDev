import React from "react";
import { skills } from "@/content/skills";
import SkillCard from "./components/SkillCard";

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
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  );
}