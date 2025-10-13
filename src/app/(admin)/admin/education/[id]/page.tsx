'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCertification } from "@/hooks/education/useCertification";
import { useDegree } from "@/hooks/education/useDegree";
import { twTheme } from "@/utils/ThemeColors";
import { useParams } from "next/navigation";
import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { MdModeEdit } from "react-icons/md";

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const id = params.id as string;
  const [type, gradeId] = id?.split("_") ?? [];

  const isDeegre = type === "degree";
  const isCertification = type === "certification";

  const { degree } = useDegree(gradeId,isDeegre);
  const { certification } = useCertification(gradeId,isCertification);

  if(degree || certification){
    return (
      <div className="flex flex-col">
        <Card className="px-4">
  
          <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">
  
            <div className="flex flex-row items-center justify-start gap-6">
  
              <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-emerald-100 ">
                {
                  isDeegre ? (<IoSchoolOutline size={30} color={twTheme.colors.emerald[700]} />) : (<PiCertificate size={30} color={twTheme.colors.emerald[700]} />)
                }
              </div>
  
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 font-semibold text-xl">{ isDeegre ? degree?.degree : certification?.title }</h2> 
                <p className="text-gray-400 text-sm font-normal"> 
                  Here is the education mayors what is showed on the front-page
                </p>
              </div>
            </div>
  
            <Button className="text-lg font-normal">
              <MdModeEdit />
              Edit
            </Button>
          </div>
  
        </Card>
      </div>
    );
  }else{
    return(
      <div>NotFound</div>
    )
  }

}
