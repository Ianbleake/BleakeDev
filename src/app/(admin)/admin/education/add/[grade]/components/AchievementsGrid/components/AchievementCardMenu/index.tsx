import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { twTheme } from "@/utils/ThemeColors";
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Card className="flex flex-row gap-4 items-center px-4 hover:bg-green-50 cursor-pointer">
          <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
          <p className="text-gray-400 text-sm font-normal">{achievement.description} - {index}</p>
        </Card>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}