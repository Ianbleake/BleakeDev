import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdModeEdit, MdOutlineLocationOn } from "react-icons/md";
import { TbLicense } from "react-icons/tb";

type GradeHeaderProps = {
  grade: GradeData;
}

export default function GradeHeader({
  grade,
}: GradeHeaderProps ): React.ReactElement {

  const Icon = grade.icon;

  return (
    <Card className="px-4 border-b border-gray-200 pb-4 flex flex-row items-center justify-between">

      <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
        <Icon size={30} color={twTheme.colors.emerald[700]} />
      </div>

      <div className="flex flex-1 flex-col gap-2">

        <h2 className="text-gray-900 font-semibold text-xl">
          { grade.name }
        </h2>

        <Separator />

        <div className="grid grid-cols-3 gap-4 my-2">
          
          <div className="flex flex-row gap-2 items-center">
            <HiOutlineBuildingLibrary size={25} color={twTheme.colors.emerald[600]} />
            <p className="text-gray-400 text-sm font-normal">
              { grade.institution }
            </p>
          </div>

          { grade.location && (
            <div className="flex flex-row gap-2 items-center">
              <MdOutlineLocationOn size={25} color={twTheme.colors.emerald[600]} />
              <p className="text-gray-400 text-sm font-normal">{ grade.location }</p>
            </div>
          )}

          { grade.credential && (
            <div className="flex flex-row gap-2 items-center">
              <TbLicense size={25} color={twTheme.colors.emerald[600]} />
              <p className="text-gray-400 text-sm font-normal">
                { grade.credential }
              </p>
            </div>
          )}

          <div className="flex flex-row gap-2 items-center">
            <BsCalendarDate size={25} color={twTheme.colors.emerald[600]} />
            <p className="text-gray-400 text-sm font-normal">
              { grade.date }
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center col-span-3">
            <GrTextAlignFull size={20} color={twTheme.colors.emerald[600]} />
            <p className="text-gray-400 text-sm font-normal">
              { grade.description }
            </p>
          </div>
          
        </div>
      </div>

      <Button className="text-lg font-normal cursor-pointer select-none">
        <MdModeEdit />
        Edit
      </Button>

    </Card>
  );
}