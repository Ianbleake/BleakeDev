import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

type PageCardSkeletonProps = {
  children: React.ReactElement;
}

export default function PageCardSkeleton({
  children,
}: PageCardSkeletonProps ): React.ReactElement {
  return (
    <Card className="px-4">

      <div className="border-b border-gray-200 pb-4 flex flex-raw items-center justify-between">

        <div className="flex flex-row items-center justify-start gap-6 flex-1">

          <Skeleton className="border border-gray-200 rounded-md shadow-sm bg-green-50 h-14 w-14"/>

          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="p-3 w-1/5"/>
            <Separator/>
            <Skeleton className="p-2 w-1/2"/>
          </div>

        </div>

        <Skeleton className="p-5 ml-4 w-1/7"/>

      </div>

      { children }

    </Card>
  );
}