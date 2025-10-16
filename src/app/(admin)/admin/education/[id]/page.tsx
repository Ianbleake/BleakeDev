'use client'

import React from "react";
import GradeHeader from "./GradeHeader";
import { useParams } from "next/navigation";
import NoData from "@/components/admin/NoData";
import { PiCertificate } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import GradeAchivements from "./GradeAchivements";
import useGrade from "@/hooks/education/useGrade";
import { periodToString } from "@/utils/periodToString";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import GradePageSkeleton from "@/components/skeletons/gradePageSkeleton";

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const path = params.id as string;

  const { isLoading } = useGrade(path);
  const { grade, type } = useGradeStorage();

  const hasNoData = grade === null;

  console.log(grade);
  const achievements = grade ? grade?.achievements : [];

  const gradeData =
  type === "degree"
    ? {
        id: grade?.id ?? "",
        icon: IoSchoolOutline,
        name: grade?.degree ?? "No grade title",
        description: grade?.description ?? "No description",
        institution: grade?.institution ?? "-",
        date: grade?.period ? periodToString(grade.period) : "-",
        period: grade?.period,
        location: grade?.location ?? "-",
        type,
      }
    : {
        id: grade?.id ?? "",
        icon: PiCertificate,
        name: grade?.title ?? "No grade title",
        description: grade?.description ?? "No description",
        institution: grade?.issuer ?? "-",
        date: grade?.date ?? "-",
        credential: grade?.credential ?? "-",
        type,
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

      <GradeAchivements achievements={achievements} /> 

    </div>
  );
}
