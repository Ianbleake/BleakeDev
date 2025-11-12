import PageCard from "@/components/admin/ui/PageCard";
import { SquareCode } from "lucide-react";
import React from "react";

export default function ProjectsPage(): React.ReactElement {

  const projectsData = {
    icon: SquareCode,
    title: "Projects",
    description: "Here can you handle the projects.",
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={projectsData}>
        <div>

        </div>
      </PageCard>  
    </div>
  );
}