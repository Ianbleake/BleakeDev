import { Separator } from "@/components/ui/separator";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import InfoCard from "./components/infoCard";
import moment from "moment";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { twTheme } from "@/utils/ThemeColors";

type GradeInfoGridProps = {
  grade: GradeData;
}

export default function GradeInfoGrid({
  grade,
}:GradeInfoGridProps ): React.ReactElement {

  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col gap-2">

      <div className="flex flex-row items-center justify-start gap-2">
        <div onClick={router.back} className="cursor-pointer">
          <IoChevronBack size={30} color={twTheme.colors.emerald[600]} />
        </div>
        <h2 className="text-gray-900 font-semibold text-xl">
          { grade.name }
        </h2>
      </div>

      <Separator />

      <div className="grid grid-cols-3 gap-4 my-2">

        <InfoCard text={ grade.institution } icon={HiOutlineBuildingLibrary}/>

        { grade.location && (
          <InfoCard text={ grade.location } icon={MdOutlineLocationOn} />
        )}

        { grade.credential && (
          <InfoCard text={ grade.credential } icon={TbLicense} />
        )}

        <InfoCard text={ grade.type === "degree" ? grade.date : moment(grade.date).format("MMM Do YY") } icon={BsCalendarDate} />

        <InfoCard text={ grade.description } icon={GrTextAlignFull} className="col-span-3 text-justify" />
        
      </div>
    </div>
  );
}