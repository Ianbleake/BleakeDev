import TechnologiesGrid from "@/components/admin/technologies/technologiesGrid";
import PageCard from "@/components/admin/ui/PageCard";
import { Cpu } from "lucide-react";
import React from "react";

export default function TechnologiesPage(): React.ReactElement {

  const techData = {
    icon: Cpu,
    title: "Technologies",
    description: "Here can you handle the technologies.",
  }

  return (
      <PageCard data={techData}>
        <TechnologiesGrid/>
      </PageCard>
  );
}