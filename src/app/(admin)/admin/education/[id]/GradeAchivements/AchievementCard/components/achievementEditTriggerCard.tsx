import React from "react";
import { SheetTrigger } from "@/components/ui/sheet";
import { twTheme } from "@/utils/ThemeColors";
import { Card } from "@/components/ui/card";
import { GoTrophy } from "react-icons/go";

type AchievementTriggerCardProps = {
  achievement: Achievement;
}

export default function AchievementEditTriggerCard({
  achievement,
}:AchievementTriggerCardProps ): React.ReactElement {
  return (
    <SheetTrigger asChild>
      <Card className="flex flex-row gap-4 items-center px-4 hover:bg-green-50 cursor-pointer">
        <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
        <p className="text-gray-400 text-sm font-normal">{achievement.description}</p>
      </Card>
    </SheetTrigger>
  );
}