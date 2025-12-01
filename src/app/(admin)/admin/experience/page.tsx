'use client'

import ExperienceGrid from "@/components/admin/experience/experienceGrid";
import NoData from "@/components/admin/ui/NoData";
import PageCard from "@/components/admin/ui/PageCard";
import useExperience from "@/hooks/experience/useExperience";
import { useExperienceStorage } from "@/storage/Admin/experienceStorage";
import { BriefcaseBusiness } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { ExperiencePageSkeleton } from "@/components/skeletons/experiencePageSkeleton";

export default function ExperiencePage(): React.ReactElement {

  const { isLoading } = useExperience();

  const { experiences } = useExperienceStorage();

  const hasNoData = experiences === null;

  const router = useRouter();

  const experienceData = {
    icon: BriefcaseBusiness,
    title: "Experience",
    description: "Here can you handle the profecional experience.",
    action: () => router.push('/admin/experience/add'),
    actionLabel: "Add Experience",
    actionIcon: FaBriefcase,
  }

  if(isLoading) {
    return (
      <ExperiencePageSkeleton/>
    );
  }

  if(hasNoData) {
    return <NoData/>;
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={experienceData}>
          <ExperienceGrid experiences={experiences} />
      </PageCard>  
    </div>
  );
}