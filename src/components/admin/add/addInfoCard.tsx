import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

type AddInfoCardProps = {
  title: string;
  description?: string;
  children: React.ReactElement;
}

export default function AddInfoCard({
  title,
  description = "The page content will be configurated after the degree were created.",
  children,
}:AddInfoCardProps ): React.ReactElement {
  return (
    <Card className="px-4 flex flex-col gap-8">

      <div className="flex flex-row items-center gap-6 flex-1 justify-between border-b border-gray-200 pb-4">

        <div className="border border-gray-200 p-3 justify-center items-center rounded-md shadow-sm bg-green-50 ">
          <IoDocumentTextOutline size={30} color={twTheme.colors.emerald[600]} />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-gray-900 font-semibold text-xl" >{ title }</h2>
          <Separator/>
          <p className="text-gray-400 text-sm font-normal" >{ description }</p>
        </div>

      </div>

      { children }

    </Card>
  );
}