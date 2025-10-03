'use client';
import React, { useEffect } from "react";
import { useProjectsStorage } from "@/storage/projectsStorage";
import { projects as projectsData } from "@/content/proyects";
import Header from "./header";
import Footer from "./footer";



export default function Body({ children }: BodyProps): React.ReactElement {

  const { setProjects } = useProjectsStorage();

  useEffect(() => {
    setProjects(projectsData);
  }, [setProjects]);

  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}