'use client'

import React from "react";
import Page from "@/components/ui/page";
import { useParams } from 'next/navigation'
import { projects } from "@/content/proyects";

export default function ProyectPage(): React.ReactElement {

  const params = useParams()
  const id = Number(params.id)

  const project = projects.find(proj => proj.id === id);

  if(project){
    return (
      <Page className="bg-gray-900">
        <div className="">
          <h2 >{project.title}</h2>
        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
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