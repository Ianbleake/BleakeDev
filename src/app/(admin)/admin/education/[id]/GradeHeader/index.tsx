import { Card } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import GradeInfoGrid from "./GradeInfoGrid";
import GradeEdit from "./GradeEdit";

type GradeHeaderProps = {
  grade: GradeData;
}

export default function GradeHeader({
  grade,
}: GradeHeaderProps ): React.ReactElement {

  const Icon = grade.icon;

  return (
    <Card className="px-4 border-b border-gray-200 pb-4 flex flex-row items-center justify-between">

      <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
        <Icon size={30} color={twTheme.colors.emerald[700]} />
      </div>

      <GradeInfoGrid grade={grade} />

      <GradeEdit />

    </Card>
  );
}