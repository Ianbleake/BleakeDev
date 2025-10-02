"use client";

import React from "react";
import Button from "@/components/ui/button";

export default function ActionButtons(): React.ReactElement {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
      <Button label="Explore My Projects" isLink={true} route="/proyects" className="px-8 py-3 cursor-pointer"/>
      <Button 
        isLink
        route="/experience"
        className="border-stone-600 hover:border-white/30 text-stone-300 hover:text-white hover:bg-emerald-500/30 px-8 py-3 bg-transparent cursor-pointer flex items-center gap-4"
      >
        View Experience
      </Button>
    </div>
  );
}
