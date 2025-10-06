import React from "react";
import { PiMapPinLineBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { workExperience } from "@/content/experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Timeline(): React.ReactElement {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-center mb-12">
          <IoBriefcaseOutline className="text-emerald-400 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index} className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gray-800">
              <CardContent className="p-0">

                <div className="md:flex">
                  
                  <div className="hidden md:flex md:w-32 bg-gradient-to-br from-emerald-600 to-emerald-700 flex-col items-center justify-center p-6">
                    <IoCalendarOutline className="text-emerald-100 mb-2" size={24} />
                    <div className="text-emerald-100 text-sm font-medium text-center leading-tight">
                      {job.period}
                    </div>
                  </div>

                
                  <div className="flex-1 p-8">

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2">{job.position}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <span className="font-semibold text-emerald-400">{job.company}</span>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center">
                            <PiMapPinLineBold className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <Badge className="bg-emerald-400/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20 w-fit">
                            {job.type}
                          </Badge>
                          <span className="md:hidden flex items-center text-sm">
                            <IoCalendarOutline className="w-4 h-4 mr-1" />
                            {job.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 flex items-start">
                            <span className="text-emerald-400 mr-2">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-emerald-900/30 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-900/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}