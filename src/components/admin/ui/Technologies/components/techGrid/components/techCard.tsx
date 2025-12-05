import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { TbDeviceImacCode } from "react-icons/tb";

type TechCardProps = {
  technology: Technology;
}

//TODO: Improve this component whit the actions dropdown menu
export default function TechCard({
  technology,
}: TechCardProps ): React.ReactElement {
  return (
    <div className="flex flex-row items-center gap-4 rounded-md border border-gray-200 shadow-sm p-2 hover:shadow-md hover:bg-green-50 transition-shadow cursor-pointer">

      <div className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 shadow-md bg-green-50" >
          <TbDeviceImacCode size={20} color={twTheme.colors.emerald[600]} /> 
      </div>

      <p className="font-medium text-sm">{technology.name}</p>
      
    </div>
  );
}