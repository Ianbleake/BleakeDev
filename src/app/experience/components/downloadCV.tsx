import Button from "@/components/ui/button";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function DownloadCv(): React.ReactElement {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/downloads/cv.pdf";
    link.download = "IvanRangelCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      onClick={handleDownloadCV}
      className="border-stone-600 text-stone-300 hover:text-white hover:bg-emerald-500/30 px-8 py-3 bg-transparent cursor-pointer flex items-center gap-4"
    >
      Download CV
      <IoCloudDownloadOutline size={25} className="mr-2" />
    </Button>
  );
}