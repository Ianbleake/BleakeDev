'use client'

import React from "react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { PiMedalFill } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
import { periodToString } from "@/utils/periodToString";
import { useEducation } from "@/hooks/education/useEducation";
import { IoSchoolOutline, IoSchoolSharp } from "react-icons/io5";
import GradesGrid from "@/components/admin/education/GradesGrid";
import PageCard from "@/components/admin/ui/PageCard";

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
        type: "degree",
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
        type: "certification"
      }
    )
  })

  const degreeAction = ()=>router.push("/admin/education/add/degree")

  const certificationAction = ()=>router.push("/admin/education/add/certification");

  const degreesData: EducationData = {
    isLoading: degreesLoading,
    grades: formattedDegreess,
  }

  const certificationsData: EducationData = {
    isLoading: certificationsLoading,
    grades: formattedCertifications,
  }

  const degreesHeaderData = {
    icon: IoSchoolOutline,
    title: "Degrees",
    description: "Here is the education mayors what is showed on the front-page",
    action: degreeAction,
    actionLabel: "Add Degree",
    actionIcon: IoSchoolSharp,
  }

  const certificationsHeaderData = {
      icon: PiCertificate,
      title: "Certifications",
      description: "Here is the certifications mayors what is showed on the front-page",
      action: certificationAction,
      actionLabel: "Add Certification",
      actionIcon: PiMedalFill,
  }

  //TODO: refactor to use general components
  return (
    <div className="flex flex-1 flex-col gap-6">

      <PageCard data={degreesHeaderData}>
        <GradesGrid gradesData={degreesData} />
      </PageCard>

      <PageCard data={certificationsHeaderData}>
        <GradesGrid gradesData={certificationsData} />
      </PageCard>

    </div>
  );
}