import { Separator } from "@/components/ui/separator";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import InfoCard from "./components/infoCard";
import moment from "moment";

type GradeInfoGridProps = {
  grade: GradeData;
}

export default function GradeInfoGrid({
  grade,
}:GradeInfoGridProps ): React.ReactElement {

  const hasDescription = Boolean(grade.description && grade.description !== "No description");

  return (
    <div className="flex flex-1 flex-col gap-2">

      <h2 className="text-gray-900 font-semibold text-xl">
        { grade.name }
      </h2>

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

        <InfoCard text={ grade.description } icon={GrTextAlignFull} className=" col-span-3 text-justify" iconSize={hasDescription ? 45 : 25} />
        
      </div>
    </div>
  );
}