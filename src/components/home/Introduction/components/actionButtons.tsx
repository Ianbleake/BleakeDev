"use client";

import React from "react";
import Button from "@/components/ui/button";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function ActionButtons(): React.ReactElement {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/downloads/cv.pdf"; // archivo dentro de /public/downloads/
    link.download = "IvanRangelCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
      <Button label="Explore My Projects" isLink={true} route="/proyects"className="px-8 py-3"/>
      <Button 
        onClick={handleDownloadCV}
        className="border-stone-600 text-stone-300 hover:text-white hover:bg-emerald-500/30 px-8 py-3 bg-transparent cursor-pointer flex items-center gap-4"
      >
        Download CV
        <IoCloudDownloadOutline size={25} className="mr-2" />
      </Button>
    </div>
  );
}
