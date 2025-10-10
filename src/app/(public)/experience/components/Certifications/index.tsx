import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/content/education";
import React from "react";
import { FaAward } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default function Certifications(): React.ReactElement {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <FaAward className="text-emerald-400 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-white">Certifications & Awards</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gray-800 hover:bg-gray-800/80 p-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/30">
                  <FaAward className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-emerald-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                  <LuExternalLink className="text-gray-400 group-hover:text-emerald-400 transition-colors" size={16} />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <p className="text-xs text-gray-500 font-mono">{cert.credential}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}