import React from "react";
import { Card } from "@/components/ui/card";
import AchievementCard from "./components/achievementCard";
import EmptyAchievements from "./components/emptyAchievements";
import AchievementHeader from "./AchivementHeader";

type GradeAchivementsProps = {
  achievements: string[];
}

export default function GradeAchivements({
  achievements,
}:GradeAchivementsProps ): React.ReactElement {
  return (
    <Card className="px-4">

      <AchievementHeader/>

      <div className="grid grid-cols-2 gap-6">
        {  ( achievements && achievements.length > 0) ? (

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