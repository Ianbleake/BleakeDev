
import { Card } from "@/components/ui/card";
import React from "react";
import AchievementsHeader from "./components/achievementsHeader";
import AchievementCard from "./components/AchievementCard";
import Empty from "../empty";
import { GoTrophy } from "react-icons/go";

type AchievementsProps = {
  type: string;
  achievements: Achievement[];
}


//TODO: the storage management have a data delay fix it

export default function Achievements({
  type,
  achievements,
}:AchievementsProps ): React.ReactElement {
  return (
    <Card className="px-4">

      <AchievementsHeader type={type}/>

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