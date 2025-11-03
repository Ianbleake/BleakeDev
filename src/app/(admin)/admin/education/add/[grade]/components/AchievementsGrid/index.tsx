import { Card } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { GoTrophy } from "react-icons/go";


type AchievementsGridProps = {
  achievements: Omit<Achievement, "id" | "grade_id" | "grade_type">[];
}

export default function AchievementsGrid({
  achievements,
}:AchievementsGridProps ): React.ReactElement {
  return (
    <div className="grid grid-cols-2 gap-4">
      {
        achievements ? (
          achievements.map((achievement, index) => {
            return(
              <Card key={index} className="flex flex-row gap-4 items-center px-4 hover:bg-green-50 cursor-pointer" >
                <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
                <p className="text-gray-400 text-sm font-normal">{achievement.description}</p>
              </Card>
            )
          })
        ) : (
          <></>
        )
      }
    </div>
  );
}