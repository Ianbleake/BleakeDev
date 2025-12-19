'use client';


import TechnologiesGrid from "@/components/admin/technologies/TechnologiesGrid";
import NoData from "@/components/admin/ui/NoData";
import PageCard from "@/components/admin/ui/PageCard";
import CategoryCardSkeleton from "@/components/skeletons/categoryCardSkeleton";
import PageCardSkeleton from "@/components/skeletons/pageCardSkeleton";
import useTechnologies from "@/hooks/technologies/useTechnologies";
import { useTechStorage } from "@/storage/Admin/techStorage";
import { Cpu } from "lucide-react";
import React from "react";

export default function TechnologiesPage(): React.ReactElement {

  const { isLoading } = useTechnologies();

  const { techs } = useTechStorage();

  const hasNoData = techs === null;

  const techData = {
    icon: Cpu,
    title: "Technologies",
    description: "Here can you handle the technologies.",
  }

  if(isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-6">
        <PageCardSkeleton>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <CategoryCardSkeleton key={i} />
            ))}
          </div>
        </PageCardSkeleton>
      </div>
    );
  }

  if(hasNoData) {
    return <NoData/>;
  }

  return (
      <PageCard data={techData}>
        <TechnologiesGrid techs={techs}/>
      </PageCard>
  );
}