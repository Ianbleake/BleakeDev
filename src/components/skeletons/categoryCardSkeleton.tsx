import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function CategoryCardSkeleton(): React.ReactElement {
  return (
    <div className="flex flex-row items-center gap-4 rounded-md border border-gray-200 shadow-sm p-2 hover:shadow-md transition-shadow">

      <Skeleton className="h-10 w-10 rounded-md border border-gray-200 shadow-md bg-green-50" />

      <Skeleton className="p-2 w-3/4"/>

    </div>
  );
}