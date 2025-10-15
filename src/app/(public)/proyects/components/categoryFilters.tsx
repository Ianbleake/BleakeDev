"use client";

import React from "react";
import Boton from "@/components/ui/Boton";
import { useProjectsStorage } from "@/storage/Public/projectsStorage";


export default function CategoryFilters() {
  const { categories, selectedCategory, setSelectedCategory } = useProjectsStorage();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Boton
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
  );
}
