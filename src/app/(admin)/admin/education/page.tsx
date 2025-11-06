'use client'

import React from "react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { PiMedalFill } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
import GradesGrid from "./components/GradesGrid";
import { periodToString } from "@/utils/periodToString";
import { useEducation } from "@/hooks/education/useEducation";
import { IoSchoolOutline, IoSchoolSharp } from "react-icons/io5";

export default function EducationPage(): React.ReactElement {

  const router = useRouter();

  const { certifications, certificationsLoading, degrees, degreesLoading } = useEducation();

  const formattedDegreess = degrees?.map((degree) => {
    return(
      {
        id: degree.id,
        icon: IoSchoolSharp,
        name: degree.degree,
        institution: degree.institution,
        date: periodToString(degree.period),
      }
    )
  })

  const formattedCertifications = certifications?.map((certification) => {
    return(
      {
        id: certification.id,
        icon: PiMedalFill,
        name: certification.title,
        institution: certification.issuer,
        date: moment(certification.date).format("MMM Do YY"),
      }
    )
  })

  const degreeAction = ()=>router.push("/admin/education/add/degree")

  const certificationAction = ()=>router.push("/admin/education/add/certification");

  const degreesData: educationData = {
    isLoading: degreesLoading,
    icon: IoSchoolOutline,
    actionIcon: IoSchoolSharp,
    title: "Education",
    description: "Here is the education mayors what is showed on the front-page",
    action: degreeAction,
    grades: formattedDegreess,
  }

  const certificationsData: educationData = {
    isLoading: certificationsLoading,
    icon: PiCertificate,
    actionIcon: PiMedalFill,
    title: "Certifications",
    description: "Here is the certifications mayors what is showed on the front-page",
    action: certificationAction,
    grades: formattedCertifications,
  }

  return (
    <div className="flex flex-1 flex-col gap-6">

      <GradesGrid gradesData={degreesData} />

      <GradesGrid gradesData={certificationsData} />

    </div>
  );
}