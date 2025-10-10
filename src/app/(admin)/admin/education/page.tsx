import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import { Dot } from "lucide-react";
import React from "react";
import { IoSchoolSharp } from "react-icons/io5";

export default function EducationPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <Card className="px-4">
        <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">


          <div className="flex flex-col gap-2">
            <h2 className="text-gray-900 font-semibold text-xl">Education </h2> 
            <p className="text-gray-400 text-sm font-normal"> 
              Here is the education mayors what is showed on the front-page
            </p>
          </div>

          <Button className="text-lg font-normal">
            Add education
            <IoSchoolSharp />
          </Button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2">

        </div>

      </Card>
    </div>
  );
}