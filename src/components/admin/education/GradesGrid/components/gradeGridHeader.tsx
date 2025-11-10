import { Button } from "@/components/ui/button";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";

type GradeGridHeaderProps = {
  headerInfo: GradeHeaderData;
}

export default function GradeGridHeader({
  headerInfo,
}: GradeGridHeaderProps ): React.ReactElement {

  const Icon = headerInfo.icon;
  const ActionIcon = headerInfo.actionIcon;

  return (
    <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">

      <div className="flex flex-row items-center justify-start gap-6">

        <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
          <Icon size={30} color={twTheme.colors.emerald[700]} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-900 font-semibold text-xl">{ headerInfo.title } </h2> 
          <p className="text-gray-400 text-sm font-normal"> 
            { headerInfo.description }
          </p>
        </div>
      </div>

      <Button className="text-lg font-normal cursor-pointer" onClick={ headerInfo.action }>
        Add education
        <ActionIcon />
      </Button>
    </div>
  );
}