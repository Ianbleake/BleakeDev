"use client";

import React from "react";
import Boton from "@/components/ui/Boton";

export default function ActionButtons(): React.ReactElement {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
      <Boton label="Explore My Projects" isLink={true} route="/proyects" className="px-8 py-3 cursor-pointer"/>
      <Boton 
        isLink
        route="/experience"
        className="border-stone-600 hover:border-white/30 text-stone-300 hover:text-white hover:bg-emerald-500/30 p-11 py-3 bg-transparent cursor-pointer"
      >
        View Experience
      </Boton>
    </div>
  );
}
