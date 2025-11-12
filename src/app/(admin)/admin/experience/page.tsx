import PageCard from "@/components/admin/ui/PageCard";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";

export default function ExperiencePage(): React.ReactElement {

  const experienceData = {
    icon: BriefcaseBusiness,
    title: "Experience",
    description: "Here can you handle the profecional experience.",
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={experienceData}>
        <div>

        </div>
      </PageCard>  
    </div>
  );
}