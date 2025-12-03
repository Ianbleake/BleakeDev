import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { twTheme } from "@/utils/ThemeColors";
import { Info, Trash } from "lucide-react";
import React from "react";
import { GoTrophy } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import EditAchievement from "../EditAchievement";

type AchievementCardMenuProps = {
  achievement: NewAchievement;
  index: number;
  removeAchievement: (index: number) => void;
  editAchievement: (index: number, updatedData: Partial<Achievement>) => void
};

export default function AchievementCardMenu({
  achievement,
  index,
  removeAchievement,
  editAchievement,
}: AchievementCardMenuProps): React.ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Card className="flex flex-row items-center justify-between px-4 hover:bg-green-50 cursor-pointer">
          <div className="flex flex-row gap-4 items-center">
            <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
            <p className="text-gray-400 text-sm font-normal">
              {achievement.description}
            </p>
          </div>
          <CiMenuKebab size={30} color={twTheme.colors.emerald[600]} />
        </Card>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] rounded-lg"
        align="end"
        sideOffset={5}
      >
        <DropdownMenuLabel className="flex flex-row items-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4" />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <EditAchievement editAchievement={editAchievement} achievement={achievement} index={index} />

        <DropdownMenuItem onClick={() => removeAchievement(index)}>
          <Trash className="mr-2 h-4 w-4" color={twTheme.colors.red[500]} />
          <span className="text-red-500">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
