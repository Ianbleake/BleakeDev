'use client'

import React from "react";
import GradeHeader from "../../../../../components/admin/education/grade/GradeHeader";
import { useParams } from "next/navigation";
import NoData from "@/components/admin/ui/NoData";
import { PiCertificate } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import GradeAchivements from "../../../../../components/admin/education/grade/GradeAchivements";
import useGrade from "@/hooks/education/useGrade";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import GradePageSkeleton from "@/components/skeletons/gradePageSkeleton";
import GradePageContent from "../../../../../components/admin/education/grade/GradePageContent";
import Achievements from "@/components/admin/ui/Achievements";

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const path = params.id as string;

  const { isLoading } = useGrade(path);

  const { type, gradeInfo, achievements } = useGradeStorage();

  const hasNoData = gradeInfo === null;

  const gradeData = type === "degree" ?  
      {
        ...gradeInfo,
        icon: IoSchoolOutline,
      }
    : 
      {
        ...gradeInfo,
        icon: PiCertificate,
      };

  if (isLoading) {
    return <GradePageSkeleton />;
  }

  if (hasNoData) {
    return <NoData />;
  }

  return (

    <div className="flex flex-col gap-4">

      <GradeHeader grade={gradeData} />

      <Achievements type={type} achievements={achievements} />

      <GradePageContent />

    </div>
  );
}
