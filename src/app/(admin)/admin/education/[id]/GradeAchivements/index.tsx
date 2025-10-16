import React from "react";
import { Card } from "@/components/ui/card";

import EmptyAchievements from "./components/emptyAchievements";
import AchievementHeader from "./AchivementHeader";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import AchievementCard from "./AchievementCard";

export default function GradeAchivements(): React.ReactElement {

  const { achievements } = useGradeStorage();
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