import React from "react";
import GradeCard from "./components/gradeCard";

type GradesGridProps = {
  gradesData: EducationData;
}

export default function GradesGrid({
  gradesData,
}: GradesGridProps ): React.ReactElement {

  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
              gradesData.map((grade, index) => (
                <GradeCard grade={grade} key={index} />
              ))
        }
      </div>

  );
}