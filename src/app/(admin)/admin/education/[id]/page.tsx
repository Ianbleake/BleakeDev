'use client'

import React from "react";
import { GoTrophy } from "react-icons/go";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { twTheme } from "@/utils/ThemeColors";
import { PiCertificate } from "react-icons/pi";
import NoData from "@/components/admin/NoData";
import { Button } from "@/components/ui/button";
import { IoSchoolOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { useDegree } from "@/hooks/education/useDegree";
import { useCertification } from "@/hooks/education/useCertification";
import GradePageSkeleton from "@/components/skeletons/gradePageSkeleton";
import GradeHeader from "./GradeHeader";
import { TbTrophyOff } from "react-icons/tb";

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

      <Card className="px-4">

        <div className="flex flex-row items-center justify-between gap-6 border-b border-gray-200 pb-4">
          <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
            <GoTrophy size={30} color={twTheme.colors.emerald[700]} />
          </div>

          <div className="flex flex-col flex-1 items-start gap-2">
            <h2 className="text-gray-900 font-semibold text-xl">Achievements</h2>
            <Separator />
            <p className="text-gray-400 text-sm font-normal">Click on the cards to edit</p>
          </div>

          <Button>
            <GoTrophy />
            Add Achievement
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {achievements.length > 0 ? (

            achievements.map((achievement, index) => (
              <Card key={index} className="flex flex-row gap-4 items-center px-4 hover:bg-green-50 cursor-pointer">
                <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
                <p className="text-gray-400 text-sm font-normal">{achievement}</p>
              </Card>
            ))

          ) : (

            <div className="flex flex-col gap-3 items-center justify-center col-span-2">
              <TbTrophyOff size={70} color={twTheme.colors.gray[300]} />
              <h2 className="text-gray-400 font-semibold text-xl">No data found</h2>
              <p className="text-gray-300 text-sm">This grade doesn’t have achievements or something went wrong.</p>
            </div>

          )}
        </div>

      </Card>
    </div>
  );
}
