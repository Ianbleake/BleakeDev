import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { periodToString } from "@/utils/periodToString";
import { twTheme } from "@/utils/ThemeColors";

import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoSchoolSharp } from "react-icons/io5";

type EducationCardProps = {
  degree: Degree 
}

export default function EducationCard({
  degree,
}:EducationCardProps): React.ReactElement {

  const router = useRouter();
  
  return (
    <Card className="h-16 flex flex-row gap-4 items-center justify-start p-4 py-12 hover:bg-green-50 cursor-pointer transition-colors" onClick={() => router.push(`/admin/education/degree_${degree.id}`)} >

      <IoSchoolSharp size={35} color={twTheme.colors.emerald[500]} />
      <div className="flex flex-1 flex-col gap-1 space-y-1">
        <h3>{degree.degree}</h3>
        <Separator/>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <p>{degree.institution}</p>
          <Dot/>
          <p>{periodToString(degree.period)}</p>
        </div>
      </div>

    </Card>
  );
}