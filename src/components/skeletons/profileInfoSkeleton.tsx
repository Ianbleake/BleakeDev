import React from "react";
import { Skeleton } from "../ui/skeleton";
import { MoreVertical } from "lucide-react";

export default function ProfileInfoSkeleton(): React.ReactElement {
  return (
    <div className="w-full flex flex-row items-center justify-between rounded-sm pr-2">
    
      <div className="flex flex-row items-center gap-3 p-2">
        
        <Skeleton className="h-8 w-8 rounded-lg bg-gray-300" />

        <div className="flex flex-col justify-center gap-2">
          <Skeleton className="h-2 w-32 rounded-md bg-gray-300" />
          <Skeleton className="h-2 w-20 rounded-md bg-gray-300" />
        </div>
      </div>

      <MoreVertical className="ml-auto size-4" />
      
    </div>
  );
}
