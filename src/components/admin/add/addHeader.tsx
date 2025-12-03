import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { IoChevronBack, IoSchoolOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";


type addHeaderConfig = {
  icon: IconType;
  title: string;
  description: string;
}
type AddGradeHeaderProps = {
  config: addHeaderConfig;
};

export default function AddHeader({
  config,
}:AddGradeHeaderProps ): React.ReactElement {

  const router = useRouter();

  const Icon = config.icon;

  return (
    <div className="border-b border-gray-200 pb-4 flex flex-row items-center justify-start gap-6">

        <div onClick={router.back} className="flex flex-row items-center justify-start gap-2 cursor-pointer">

          <div className="cursor-pointer">
            <IoChevronBack size={30} color={twTheme.colors.emerald[600]} />
          </div>

          <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
            <Icon size={30} color={twTheme.colors.emerald[700]} />
          </div>

        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-gray-900 font-semibold text-xl">{ config.title }</h2>
          <Separator/>
          <p className="text-gray-400 text-sm font-normal"> 
            { config.description }
          </p>
        </div>

    </div>
  );
}