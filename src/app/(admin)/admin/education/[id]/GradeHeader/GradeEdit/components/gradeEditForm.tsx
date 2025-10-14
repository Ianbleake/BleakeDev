import React from "react";

type GradeEditFormProps = {
  grade: GradeData;
} 

export default function GradeEditForm({
grade,
}:GradeEditFormProps ): React.ReactElement {

  console.log("Grade in form:",grade)
  return (
    <div className="px-4">
      GradeEditForm
    </div>
  );
}