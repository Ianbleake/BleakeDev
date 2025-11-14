'use client'

import ExperienceGrid from "@/components/admin/experience/experienceGrid";
import NoData from "@/components/admin/ui/NoData";
import PageCard from "@/components/admin/ui/PageCard";
import EducationCardSkeleton from "@/components/skeletons/educationCardSkeleton";
import PageCardSkeleton from "@/components/skeletons/pageCardSkeleton";
import useExperience from "@/hooks/experience/useExperience";
import { useExperienceStorage } from "@/storage/Admin/experienceStorage";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";

export default function ExperiencePage(): React.ReactElement {

  const { isLoading } = useExperience();

  const { experiences } = useExperienceStorage();

  const hasNoData = experiences === null;

  const experienceData = {
    icon: BriefcaseBusiness,
    title: "Experience",
    description: "Here can you handle the profecional experience.",
  }

  if(isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-6">
        <PageCardSkeleton>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <EducationCardSkeleton key={i} />
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
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={experienceData}>
        <div>
          <ExperienceGrid experiences={experiences} />
        </div>
      </PageCard>  
    </div>
  );
}