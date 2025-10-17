import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEducation } from "@/hooks/education/useEducation";
import React from "react";
import { PiMedalFill } from "react-icons/pi";
import { twTheme } from "@/utils/ThemeColors";
import { PiCertificate } from "react-icons/pi";
import CertificationCard from "./components/certificationCard";
import EducationCardSkeleton from "@/components/skeletons/educationCardSkeleton";
import { useRouter } from "next/navigation";

export default function Certifications(): React.ReactElement {

  const { certifications, certificationsLoading  } = useEducation();

  const router = useRouter();

  return (
    <Card className="px-4">
      <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">

        <div className="flex flex-row items-center justify-start gap-6">

          <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
            <PiCertificate size={30} color={twTheme.colors.emerald[700]} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-900 font-semibold text-xl">Certifications </h2> 
            <p className="text-gray-400 text-sm font-normal"> 
              Here is the certifications mayors what is showed on the front-page
            </p>
          </div>
          
        </div>

        <Button className="text-lg font-normal cursor-pointer" onClick={()=>router.push("/admin/education/add/certification")}>
          Add Certification
          <PiMedalFill />
        </Button>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {
          certificationsLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <EducationCardSkeleton key={i} />
            ))
          ) : (
            certifications?.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))
          )
        }
      </div>

    </Card>
  );
}