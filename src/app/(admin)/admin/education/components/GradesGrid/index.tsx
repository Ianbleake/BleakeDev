import React from "react";
import { Card } from "@/components/ui/card";
import GradeCard from "./components/gradeCard";
import GradeGridHeader from "./components/gradeGridHeader";
import EducationCardSkeleton from "@/components/skeletons/educationCardSkeleton";

type GradesGridProps = {
  gradesData: educationData;
}

export default function GradesGrid({
  gradesData,
}: GradesGridProps ): React.ReactElement {

  const infoHeader = {
    icon: gradesData.icon,
    actionIcon: gradesData.actionIcon,
    title: gradesData.title,
    description: gradesData.description,
    action: gradesData.action,
  }

  return (
    
    <Card className="px-4">
      
      <GradeGridHeader headerInfo={infoHeader} />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          gradesData.isLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <EducationCardSkeleton key={i} />
            ))
          ) : (
            gradesData.grades?.map((grade, index) => (
              <GradeCard grade={grade} key={index} />
            ))
          )
        }
      </div>

    </Card>
  );
}