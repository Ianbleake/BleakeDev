
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import { Dot } from "lucide-react";
import React from "react";



type PageItemProps = {
  item: PageItem;
  size?: "small" | "large";
}

export default function PageItem({
  item,
  size = "large",
}: PageItemProps ): React.ReactElement {

  const Icon = item.icon;

  if(size === "small"){
    return (
      <div className="flex flex-row items-center gap-4 rounded-md border border-gray-200 shadow-sm p-2 hover:shadow-md hover:bg-green-50 transition-shadow cursor-pointer">

        <div className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 shadow-md bg-green-50" >
            <Icon size={20} color={twTheme.colors.emerald[600]} /> 
        </div>

        <p className="font-medium text-sm">{item.name}</p>
        
      </div>
    )
  }

  return (
    <Card className="h-16 flex flex-row gap-4 items-center justify-start p-4 py-12 hover:bg-green-50 cursor-pointer transition-colors" onClick={item.action} >

      <Icon size={35} color={twTheme.colors.emerald[500]} />
      <div className="flex flex-1 flex-col gap-1 space-y-1">
        <h3>{item.name}</h3>
        <Separator/>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <p>{item.valueOne}</p>
          {
            item.valueTwo && (
              <>
                <Dot/>
                <p>{item.valueTwo}</p>
              </>
            )
          }
        </div>
      </div>

    </Card>
  );
}