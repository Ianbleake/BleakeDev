import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type GradeCardProps = {
  grade: GradeCardData;
}

export default function GradeCard({
  grade,
}: GradeCardProps ): React.ReactElement {

  const Icon = grade.icon;

  const router = useRouter();

  return (
    <Card className="h-16 flex flex-row gap-4 items-center justify-start p-4 py-12 hover:bg-green-50 cursor-pointer transition-colors" onClick={() => router.push(`/admin/education/degree_${grade.id}`)} >

      <Icon size={35} color={twTheme.colors.emerald[500]} />
      <div className="flex flex-1 flex-col gap-1 space-y-1">
        <h3>{grade.name}</h3>
        <Separator/>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <p>{grade.institution}</p>
          <Dot/>
          <p>{grade.date}</p>
        </div>
      </div>

    </Card>
  );
}