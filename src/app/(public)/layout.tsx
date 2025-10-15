"use client";

import React, { useEffect } from "react";
import { useProjectsStorage } from "@/storage/Public/projectsStorage";
import { projects as projectsData } from "@/content/proyects";
import Header from "@/components/public/header";
import Footer from "@/components/public/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { setProjects } = useProjectsStorage();

  useEffect(() => {
    setProjects(projectsData);
  }, [setProjects]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
