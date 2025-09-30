'use client'

import React, { useState } from "react";
import Page from "@/components/ui/page";
import { MdOutlineFilterDrama } from "react-icons/md";
import Button from "@/components/ui/button";
import ProyectsGrid from "./components/proyectsGrid";
import { projects } from "@/content/proyects";
import { categories } from "@/content/categories";

export default function Proyects(): React.ReactElement {

  const [selectedCategory, setSelectedCategory] = useState("All");
  

  const filteredProjects = selectedCategory === "All" 
  ? projects 
  : projects.filter(p => p.category === selectedCategory);
  
  return (
    <Page>

      <section className="pt-32 pb-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-800">
            <MdOutlineFilterDrama size={20} className="mr-2" />
            Portfolio Showcase
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h1>
          
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-12">
            A collection of projects that showcase my expertise in building modern, 
            scalable applications. From concept to deployment, each project tells a story 
            of innovation and problem-solving.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "primary" : "secondary"}
                className={
                  selectedCategory === category
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "border-gray-600 text-stone-300 hover:bg-gray-800 bg-transparent"
                }
                label={category}
              />
            ))}
          </div>
        </div>
      </section>

      <ProyectsGrid proyects={filteredProjects} />


    </Page>
  );
}