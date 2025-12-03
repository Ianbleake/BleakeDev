import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { TbDeviceImacCode } from "react-icons/tb";

export default function TechHeader(): React.ReactElement {
  return (
    <div className="flex flex-row items-center justify-between gap-6 border-b border-gray-200 pb-4">

      <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
        <TbDeviceImacCode size={30} color={twTheme.colors.emerald[700]} />
      </div>

      <div className="flex flex-col flex-1 items-start gap-2">
        <h2 className="text-gray-900 font-semibold text-xl">Technologies</h2>
        <Separator />
        <p className="text-gray-400 text-sm font-normal">Click on the cards to edit</p>
      </div>
      
    </div>
  );
}