'use client'

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDegree } from "@/hooks/education/useDegree";
import { twTheme } from "@/utils/ThemeColors";
import { useParams } from "next/navigation";
import { IoSchoolOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { MdModeEdit, MdOutlineLocationOn } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GrTextAlignFull } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { TbLicense, TbTrophyOff } from "react-icons/tb";
import { useCertification } from "@/hooks/education/useCertification";
import GradePageSkeleton from "@/components/skeletons/gradePageSkeleton";
import NoData from "@/components/NoData";

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


  if (isLoading) {
    return <GradePageSkeleton />;
  }

  if (hasNoData) {
    return <NoData />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="px-4 border-b border-gray-200 pb-4 flex flex-row items-center justify-between">
        <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
          {isDegree ? (
            <IoSchoolOutline size={30} color={twTheme.colors.emerald[700]} />
          ) : (
            <PiCertificate size={30} color={twTheme.colors.emerald[700]} />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <h2 className="text-gray-900 font-semibold text-xl">
            {isDegree ? degree?.degree : certification?.title || "No title"}
          </h2>

          <Separator />

          <div className="grid grid-cols-3 gap-4 my-2">
            <div className="flex flex-row gap-2 items-center">
              <HiOutlineBuildingLibrary size={25} color={twTheme.colors.emerald[600]} />
              <p className="text-gray-400 text-md font-normal">
                {isDegree ? degree?.institution : certification?.issuer || "-"}
              </p>
            </div>

            {isDegree && (
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineLocationOn size={25} color={twTheme.colors.emerald[600]} />
                <p className="text-gray-400 text-sm font-normal">{degree?.location}</p>
              </div>
            )}

            {isCertification && (
              <div className="flex flex-row gap-2 items-center">
                <TbLicense size={25} color={twTheme.colors.emerald[600]} />
                <p className="text-gray-400 text-sm font-normal">
                  {certification?.credential || "-"}
                </p>
              </div>
            )}

            <div className="flex flex-row gap-2 items-center">
              <BsCalendarDate size={25} color={twTheme.colors.emerald[600]} />
              <p className="text-gray-400 text-sm font-normal">
                {isDegree ? degree?.period : certification?.date || "-"}
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center col-span-3">
              <GrTextAlignFull size={20} color={twTheme.colors.emerald[600]} />
              <p className="text-gray-400 text-sm font-normal">
                {isDegree
                  ? degree?.description
                  : certification?.description || "No description"}
              </p>
            </div>
          </div>
        </div>

        <Button className="text-lg font-normal cursor-pointer select-none">
          <MdModeEdit />
          Edit
        </Button>
      </Card>

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
