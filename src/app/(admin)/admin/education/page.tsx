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
import Empty from "@/components/admin/ui/empty";
import { EducationPageSkeleton } from "@/components/skeletons/educationPageSkeleton";

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

  const isLoading = certificationsLoading || degreesLoading;

  const degreeAction = ()=>router.push("/admin/add/degree")

  const certificationAction = ()=>router.push("/admin/add/certification");

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

  if(isLoading) {
    return (
      <EducationPageSkeleton/>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6">

      <PageCard data={degreesHeaderData}>
        {
          formattedDegreess ? (
            <GradesGrid gradesData={formattedDegreess} />
          ) : (
            <Empty icon={IoSchoolOutline} title="No Degrees" description="Add new degree with the button on the header of this card"  />
          )
        }
      </PageCard>

      <PageCard data={certificationsHeaderData}>
        {
          formattedCertifications ? (
            <GradesGrid gradesData={formattedCertifications} />
          ) : (
            <Empty icon={PiCertificate} title="No Certifications" description="Add new certification with the button on the header of this card"  />
          )
        }
      </PageCard>

    </div>
  );
}