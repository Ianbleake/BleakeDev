'use client'

import React from "react";
import Page from "@/components/ui/page";
import { useParams } from 'next/navigation'
import { projects } from "@/content/proyects";
import Hero from "./components/Hero";
import Overview from "./components/overview";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Slider from "./components/Slider";


export default function ProyectPage(): React.ReactElement {

  const params = useParams()
  const id = Number(params.id)

  const project = projects.find(proj => proj.id === id);

  if(project){
    return (
      <Page className="bg-gray-900">
          <Hero project={project}/>
          <Overview project={project}/>
          <Features project={project}/>
          {
            project.pageContent.galleryType === 'grid' ? <Gallery project={project}/> : <Slider images={project.pageContent.images}/>
          }
          <Contact/>
      </Page>
    );
  }else{
    return (
      <Page>
        <div>
          <h2>Project Not Found</h2>
        </div>
      </Page>
    );
  }
}