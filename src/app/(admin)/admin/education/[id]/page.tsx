'use client'

import React from "react";
import GradeHeader from "./GradeHeader";
import { useParams } from "next/navigation";
import NoData from "@/components/admin/NoData";
import { PiCertificate } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import GradeAchivements from "./GradeAchivements";
import useGrade from "@/hooks/education/useGrade";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import GradePageSkeleton from "@/components/skeletons/gradePageSkeleton";
import GradePageContent from "./GradePageContent";

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const path = params.id as string;

  const { isLoading } = useGrade(path);

  const { type, gradeInfo } = useGradeStorage();

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

      <GradeAchivements/>

      <GradePageContent />

    </div>
  );
}
