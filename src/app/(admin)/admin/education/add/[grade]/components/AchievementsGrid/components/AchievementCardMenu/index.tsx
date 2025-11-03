import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { twTheme } from "@/utils/ThemeColors";
import { Info, Pencil, Trash } from "lucide-react";
import React from "react";
import { GoTrophy } from "react-icons/go";


type AchievementCardMenuProps = {
  achievement: Omit<Achievement, "id" | "grade_id" | "grade_type">;
  index: number;
}

export default function AchievementCardMenu({
  achievement,
  index,
}:AchievementCardMenuProps ): React.ReactElement {
  return (
    <DropdownMenu
      
    >
      <DropdownMenuTrigger asChild>
        <Card className="flex flex-row gap-4 items-center px-4 hover:bg-green-50 cursor-pointer">
          <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
          <p className="text-gray-400 text-sm font-normal">{achievement.description} - {index}</p>
        </Card>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] rounded-lg"
        align="end"
        sideOffset={5}
      >


        <DropdownMenuLabel className="flex flex-row items-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4"/>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4"/>
          Edit
        </DropdownMenuItem>

        <DropdownMenuItem >
          <Trash className="mr-2 h-4 w-4" color={twTheme.colors.red[500]}/>
          <span className="text-red-500">Delete</span>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}