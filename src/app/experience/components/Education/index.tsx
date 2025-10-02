import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/content/education";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { PiMapPinLineBold } from "react-icons/pi";

export default function Education(): React.ReactElement {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <FaGraduationCap className="text-emerald-400 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gray-900">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="hidden md:flex md:w-32 bg-gradient-to-br from-emerald-600 to-emerald-700 flex-col items-center justify-center p-6">
                    <IoCalendarOutline className="text-emerald-100 mb-2" size={24} />
                    <div className="text-emerald-100 text-sm font-medium text-center leading-tight">
                      {edu.period}
                    </div>
                  </div>

                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 mb-4">
                      <span className="font-semibold text-emerald-400">{edu.institution}</span>
                      <span className="hidden sm:block">•</span>
                      <div className="flex items-center">
                        <PiMapPinLineBold className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      <span className="md:hidden flex items-center text-sm">
                        <IoCalendarOutline className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Highlights</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 flex items-start">
                            <span className="text-emerald-400 mr-2">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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