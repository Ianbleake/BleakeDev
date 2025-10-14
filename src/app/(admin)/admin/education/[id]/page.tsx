'use client'

import React from "react";
import { useParams } from "next/navigation";
import { PiCertificate } from "react-icons/pi";
import NoData from "@/components/admin/NoData";
import { IoSchoolOutline } from "react-icons/io5";
import { useDegree } from "@/hooks/education/useDegree";
import { useCertification } from "@/hooks/education/useCertification";
import GradePageSkeleton from "@/components/skeletons/gradePageSkeleton";
import GradeHeader from "./GradeHeader";
import GradeAchivements from "./GradeAchivements";

//TODO: refactor and componentize this page

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const id = params.id as string;
  const [type, gradeId] = id?.split("_") ?? [];

  const isDegree = type === "degree";
  const isCertification = type === "certification";

  const { degree, degreeLoading } = useDegree(gradeId, isDegree);
  const { certification, certificationLoading } = useCertification(gradeId, isCertification);

  const isLoading = degreeLoading || certificationLoading;
  const hasNoData = !degree && !certification && !isLoading;
  const achievements = (isDegree ? degree?.achievements : certification?.achievements) ?? [];

  const gradeData = isDegree ? {
    icon: IoSchoolOutline,
    name: degree?.degree || "No grade title",
    description: degree?.description || "No description",
    institution: degree?.institution || "-",
    date: degree?.period || "-",
    location: degree?.location || "-",
  } : {
    icon: PiCertificate,
    name: certification?.title || "No grade title",
    description: certification?.description || "No description",
    institution: certification?.issuer || "-",
    date: certification?.date || "-",
    credential: certification?.credential || "-",
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
