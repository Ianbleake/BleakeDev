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
import { periodToString } from "@/utils/periodToString";

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const id = params.id as string;
  const [type, gradeId] = id?.split("_") ?? [];

  const isDegree = type === "degree";
  const isCertification = type === "certification";

  //TODO: homologate this on just one hook
  const { degree, degreeLoading } = useDegree(gradeId, isDegree);
  const { certification, certificationLoading } = useCertification(gradeId, isCertification);

  const isLoading = degreeLoading || certificationLoading;
  const hasNoData = !degree && !certification && !isLoading;
  const achievements = (isDegree ? degree?.achievements : certification?.achievements) ?? [];

  const period = degree?.period && periodToString(degree?.period);

  const gradeData = isDegree ? {
    id: degree?.id || "",
    icon: IoSchoolOutline,
    name: degree?.degree || "No grade title",
    description: degree?.description || "No description",
    institution: degree?.institution || "-",
    date: period || "-",
    period: degree?.period,
    location: degree?.location || "-",
    type: type,
  } : {
    id: certification?.id || "",
    icon: PiCertificate,
    name: certification?.title || "No grade title",
    description: certification?.description || "No description",
    institution: certification?.issuer || "-",
    date: certification?.date || "-",
    credential: certification?.credential || "-",
    type: type,
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
