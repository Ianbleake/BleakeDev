'use client'

import React from "react";
import Page from "@/components/ui/page";
import { useParams } from 'next/navigation'
import { projects } from "@/content/proyects";
import Hero from "./components/Hero";
import Overview from "./components/overview";
import Features from "./components/Features";
import Gallery from "./components/Gallery";


export default function ProyectPage(): React.ReactElement {

  const params = useParams()
  const id = Number(params.id)

  const project = projects.find(proj => proj.id === id);

  //TODO: Add a slider gallery as optional component to showcase project screenshots (to mobile mocks)

  if(project){
    return (
      <Page className="bg-gray-900">
          <Hero project={project}/>
          <Overview project={project}/>
          <Features project={project}/>
          <Gallery project={project}/> 
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