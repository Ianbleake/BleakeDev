import React from "react";
import { twTheme } from "@/utils/ThemeColors";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type PageCardHeaderProps = {
  headerData: PageCardHeaderData;
}

export default function PageCardHeader({
  headerData,
}: PageCardHeaderProps ): React.ReactElement {

  const Icon = headerData.icon;
  const ActionIcon = headerData.actionIcon;

  return (
    <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">

      <div className="flex flex-row items-center justify-start gap-6 flex-1">

        <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
          <Icon size={30} color={twTheme.colors.emerald[700]} />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-gray-900 font-semibold text-xl">{headerData.title} </h2>
          <Separator/>
          <p className="text-gray-400 text-sm font-normal"> 
            {headerData.description}
          </p>
        </div>
      </div>

      {headerData.action && (
        typeof headerData.action === "function" ? (
          <Button className="text-lg font-normal cursor-pointer" onClick={headerData.action}>
            Add education
            {ActionIcon && <ActionIcon />}
          </Button>
        ) : (
          headerData.action
        )
      )}

    </div>
  );
}