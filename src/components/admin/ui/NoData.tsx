import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TbDatabaseOff } from "react-icons/tb"
import { useRouter } from "next/navigation"

interface NoDataProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  actionLabel?: string
  onAction?: () => void
}

export default function NoData({
  title = "No data found",
  description = "This section doesn't have any records yet or something went wrong.",
  icon = <TbDatabaseOff size={70} className="text-gray-300" />,
  actionLabel,
  onAction,
}: NoDataProps): React.ReactElement {

  const router = useRouter();

  return (
    <Card className="flex flex-col items-center justify-center gap-3 p-8 text-center border border-dashed border-gray-200 shadow-none bg-white">

      <div className="flex flex-col items-center gap-2">
        {icon}
        <h2 className="text-gray-500 font-semibold text-lg">{title}</h2>
        <p className="text-gray-400 text-sm max-w-sm">{description}</p>
      </div>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          variant="outline"
          className="mt-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50"
        >
          {actionLabel}
        </Button>
      )}

      {
        !actionLabel && !onAction && (
          <Button
            onClick={() => router.back()}
            variant="secondary"
            className="mt-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50 cursor-pointer"
          >
            Go Back
          </Button>
        )
      }
    </Card>
  )
}
