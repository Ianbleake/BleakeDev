import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function GradePageSkeleton() {
  return (
    <div className="flex flex-col gap-4">

      {/* Header info card */}
      <Card className="px-4 border-b border-gray-200 pb-4 flex flex-row items-center justify-between">

        {/* Icon */}
        <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50">
          <Skeleton className="h-[30px] w-[30px] rounded-md" />
        </div>

        {/* Main info */}
        <div className="flex flex-1 flex-col gap-2 px-4">
          <Skeleton className="h-6 w-2/3" /> {/* title */}
          <Separator />

          <div className="grid grid-cols-3 gap-4 my-2">

            {/* Institution */}
            <div className="flex flex-row gap-2 items-center">
              <Skeleton className="h-[25px] w-[25px] rounded-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            {/* Optional location */}
            <div className="flex flex-row gap-2 items-center">
              <Skeleton className="h-[25px] w-[25px] rounded-full" />
              <Skeleton className="h-4 w-1/3" />
            </div>

            {/* Date */}
            <div className="flex flex-row gap-2 items-center">
              <Skeleton className="h-[25px] w-[25px] rounded-full" />
              <Skeleton className="h-4 w-1/4" />
            </div>

            {/* Description (full width) */}
            <div className="flex flex-row gap-2 items-center col-span-3">
              <Skeleton className="h-[20px] w-[20px] rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>

          </div>
        </div>

        {/* Edit button */}
        <Skeleton className="h-9 w-24 rounded-md" />
      </Card>

      {/* Achievements card */}
      <Card className="px-4 py-4 flex flex-col gap-4">

        {/* Header */}
        <div className="flex flex-row items-center justify-between gap-6 border-b border-gray-200 pb-4">
          <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50">
            <Skeleton className="h-[30px] w-[30px] rounded-md" />
          </div>

          <div className="flex flex-col flex-1 items-start gap-2">
            <Skeleton className="h-5 w-1/3" />
            <Separator />
            <Skeleton className="h-3 w-1/2" />
          </div>

          <Skeleton className="h-9 w-32 rounded-md" />
        </div>

        {/* Achievements list */}
        <div className="grid grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="flex flex-row gap-4 items-center px-4 py-3">
              <Skeleton className="h-[30px] w-[30px] rounded-full" />
              <Skeleton className="h-4 w-3/4" />
            </Card>
          ))}
        </div>
      </Card>

    </div>
  )
}
