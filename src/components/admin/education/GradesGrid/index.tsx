import React from "react";
import GradeCard from "./components/gradeCard";
import EducationCardSkeleton from "@/components/skeletons/educationCardSkeleton";

type GradesGridProps = {
  gradesData: EducationData;
}

export default function GradesGrid({
  gradesData,
}: GradesGridProps ): React.ReactElement {

  return (
    


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

  );
}