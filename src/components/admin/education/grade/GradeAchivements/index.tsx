import React from "react";
import { Card } from "@/components/ui/card";
import AchievementHeader from "./AchivementHeader";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import AchievementCard from "./AchievementCard";
import Empty from "@/components/admin/empty";
import { GoTrophy } from "react-icons/go";

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

          <div className="col-span-2" >
            <Empty icon={GoTrophy} title="No achievements found" description="This grade doesn’t have achievements or something went wrong." />
          </div>

        )}
      </div>

    </Card>
  );
}