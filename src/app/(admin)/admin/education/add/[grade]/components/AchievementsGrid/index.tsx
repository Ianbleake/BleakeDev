import Empty from "@/components/admin/empty";
import React from "react";
import { GoTrophy } from "react-icons/go";
import AchievementCardMenu from "./components/AchievementCardMenu";


type AchievementsGridProps = {
  achievements: Omit<Achievement, "id" | "grade_id" | "grade_type">[];
  removeAchievement: (index: number) => void;
  editAchievement: (index: number, updatedData: Partial<Achievement>) => void
}

export default function AchievementsGrid({
  achievements,
  removeAchievement,
  editAchievement,
}:AchievementsGridProps ): React.ReactElement {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      {
        achievements.length > 0 ? (
          achievements.map((achievement, index) => {
            return(
              <AchievementCardMenu achievement={achievement} removeAchievement={removeAchievement} editAchievement={editAchievement} index={index} key={index} />
            )
          })
        ) : (
          <div className="col-span-2">
            <Empty icon={GoTrophy} title="No Achievements" description="Add new achievements with the button on the header of this card" />
          </div>
        )
      }
    </div>
  );
}