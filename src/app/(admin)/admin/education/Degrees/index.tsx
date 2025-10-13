import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { IoSchoolOutline, IoSchoolSharp } from "react-icons/io5";
import EducationCard from "./components/educationCard";
import { useEducation } from "@/hooks/education/useEducation";
import EducationCardSkeleton from "@/components/skeletons/educationCardSkeleton";

export default function Degrees(): React.ReactElement {

  const { degrees, degreesLoading } = useEducation();

  return (

    <Card className="px-4">
      <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">

        <div className="flex flex-row items-center justify-start gap-6">

          <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-emerald-100 ">
            <IoSchoolOutline size={30} color={twTheme.colors.emerald[700]} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-900 font-semibold text-xl">Education </h2> 
            <p className="text-gray-400 text-sm font-normal"> 
              Here is the education mayors what is showed on the front-page
            </p>
          </div>
        </div>

        <Button className="text-lg font-normal">
          Add education
          <IoSchoolSharp />
        </Button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          degreesLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <EducationCardSkeleton key={i} />
            ))
          ) : (
            degrees?.map((degree) => (
              <EducationCard degree={degree} key={degree.id} />
            ))
          )
        }
      </div>

    </Card>
  );
}