import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";

type AddGradeHeaderProps = {
  isDeegree: boolean;
};

export default function AddGradeHeader({
  isDeegree,
}:AddGradeHeaderProps ): React.ReactElement {
  return (
    <div className="border-b border-gray-200 pb-4 flex flex-row items-center justify-start gap-6">

        <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
          { isDeegree ? <IoSchoolOutline size={30} color={twTheme.colors.emerald[700]} /> : <PiCertificate size={30} color={twTheme.colors.emerald[700]} />}
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-gray-900 font-semibold text-xl">Create a new { isDeegree ? "Degree" : "Certification"} </h2>
          <Separator/>
          <p className="text-gray-400 text-sm font-normal"> 
            Remember save your changes.
          </p>
        </div>

    </div>
  );
}