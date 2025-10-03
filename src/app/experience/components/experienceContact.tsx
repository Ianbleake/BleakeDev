import Button from "@/components/ui/button";
import React from "react";

export default function ExperienceContact(): React.ReactElement {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-emerald-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Interested in Working Together?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I`m always open to discussing new opportunities and interesting projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button 
            isLink
            route="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 shadow-lg w-50"
          >
            <p className="text-center w-full">Get In Touch</p>
          </Button>
          <Button 
            variant="secondary" 
            isLink
            route="/proyects"
            className="border-emerald-600 text-emerald-400 hover:bg-emerald-950 px-8 py-3 bg-transparent w-50"
          >
            <p className="text-center w-full">View My Projects</p>
            
          </Button>
        </div>
      </div>
    </section>
  );
}