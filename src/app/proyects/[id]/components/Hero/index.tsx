import Button from "@/components/ui/button";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import { IoCalendar } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import ProyectStatus from "./components/proyectsStatus";


type HeroProps = {
  project: Project;
}

export default function Hero({
  project,
}:HeroProps ): React.ReactElement {

  return (   
    <section className={`pt-32 pb-20 px-6 relative overflow-hidden`} style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", }} >

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="max-w-5xl mx-auto relative">
        <ProyectStatus status={project.status} />
        <h1 className="text-5xl lg:text-6xl font-bold text-emerald-500 mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button>
            <LuExternalLink className="mr-2 h-5 w-5" />
            View Live Demo
          </Button>
          <Button
            variant="secondary"
            className="border-white text-white hover:bg-emerald-600/10 bg-transparent"
          >
            <VscGithub className="mr-2 h-5 w-5" />
            View Source Code
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <IoCalendar className="h-5 w-5" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegUserCircle className="h-5 w-5" />
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCode className="h-5 w-5" />
            <span>{project.category}</span>
          </div>
        </div>
      </div>
    </section>

  );
}