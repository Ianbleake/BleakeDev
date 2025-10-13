import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Dot } from "lucide-react";
import { Separator } from "../ui/separator";
import { twTheme } from "@/utils/ThemeColors";

export default function EducationCardSkeleton(): React.ReactElement {
  return (
    <Card className="h-16 flex flex-row gap-4 items-center justify-start p-4 py-12 hover:bg-emerald-50 cursor-pointer transition-colors">
      <Skeleton className="h-12 w-12 rounded-md"/>
      <div className="flex flex-1 flex-col gap-1 space-y-1">
        <Skeleton className="h-3 w-5/6" />
        <Separator/>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <Skeleton className="h-3 w-2/5"/>
          <Dot color={twTheme.colors.gray[300]} />
          <Skeleton className="h-3 w-2/6"/>
        </div>
      </div>
    </Card>
  );
}