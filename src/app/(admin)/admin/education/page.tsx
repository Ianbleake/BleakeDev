'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEducation } from "@/hooks/education/useEducation";
import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import EducationCard from "./components/educationCard";
import { PiMedalFill } from "react-icons/pi";
import CertificationCard from "./components/certificationCard";

export default function EducationPage(): React.ReactElement {

  const { degrees, certifications  } = useEducation();
  return (
    <div className="flex flex-1 flex-col gap-6">

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
          {
            degrees && degrees.map((degree)=>{
              return(
                <EducationCard degree={degree} key={degree.id} />
              )
            })
          }
        </div>

      </Card>

      <Card className="px-4">
        <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">


          <div className="flex flex-col gap-2">
            <h2 className="text-gray-900 font-semibold text-xl">Certifications </h2> 
            <p className="text-gray-400 text-sm font-normal"> 
              Here is the certifications mayors what is showed on the front-page
            </p>
          </div>

          <Button className="text-lg font-normal">
            Add Certification
            <PiMedalFill />
          </Button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            certifications && certifications.map((certification)=>{
              return(
                <CertificationCard certification={certification} key={certification.id}/>
              )
            })
          }
        </div>

      </Card>

    </div>
  );
}