import React from "react";
import { GoTrophy } from "react-icons/go";
import { Card } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AchievementCard from "./components/achievementCard";
import EmptyAchievements from "./components/emptyAchievements";

type GradeAchivementsProps = {
  achievements: string[];
}

export default function GradeAchivements({
  achievements,
}:GradeAchivementsProps ): React.ReactElement {
  return (
    <Card className="px-4">

      <div className="flex flex-row items-center justify-between gap-6 border-b border-gray-200 pb-4">

        <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
          <GoTrophy size={30} color={twTheme.colors.emerald[700]} />
        </div>

        <div className="flex flex-col flex-1 items-start gap-2">
          <h2 className="text-gray-900 font-semibold text-xl">Achievements</h2>
          <Separator />
          <p className="text-gray-400 text-sm font-normal">Click on the cards to edit</p>
        </div>

        <Button>
          <GoTrophy />
          Add Achievement
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {achievements.length > 0 ? (

          achievements.map((achievement, index) => (
            <AchievementCard achievement={achievement} key={index} />
          ))

        ) : (

          <EmptyAchievements />

        )}
      </div>

    </Card>
  );
}