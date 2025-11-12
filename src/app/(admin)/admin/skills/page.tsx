import PageCard from "@/components/admin/ui/PageCard";
import { Medal } from "lucide-react";
import React from "react";

export default function SkillsPage(): React.ReactElement {

  const skillsData = {
    icon: Medal,
    title: "Skills",
    description: "Here can you handle the skills.",
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={skillsData}>
        <div>

        </div>
      </PageCard>  
    </div>
  );
}