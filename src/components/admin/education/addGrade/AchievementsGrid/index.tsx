import Empty from "@/components/admin/empty";
import React from "react";
import { GoTrophy } from "react-icons/go";
import AchievementCardMenu from "./components/AchievementCardMenu";
import { Card } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";
import { Separator } from "@/components/ui/separator";
import AddAchivement from "./components/AddAchivement";


type AchievementsGridProps = {
  achievements: NewAchievement[];
  setAchievements: React.Dispatch<React.SetStateAction<NewAchievement[]>>;
}

export default function AchievementsGrid({
  achievements,
  setAchievements,
}:AchievementsGridProps ): React.ReactElement {

  const addAchievement = (achievement: NewAchievement ) => {
    setAchievements(prev => [...prev, achievement]);
  };

  const deleteAchievement = (index: number) => {
    setAchievements((prev) => prev.filter((_, i) => i !== index));
  };

  const editAchievement = (index: number, updatedData: Partial<Achievement>) => {
    setAchievements((prev) =>
      prev.map((a, i) => (i === index ? { ...a, ...updatedData } : a))
    );
  };

  return (
    <Card className="px-4 flex flex-col gap-8">

      <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-4">

        <div className="flex flex-row items-center gap-6 flex-1">
          <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
            <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
          </div>

          <div className="flex flex-col gap-2 flex-1 pr-8">
            <h2 className="text-gray-900 font-semibold text-xl" >Achievements</h2>
            <Separator/>
            <p className="text-gray-400 text-sm font-normal" >Before to save the degree set the achievements</p>
          </div>
        </div>

        <AddAchivement addAchievement={addAchievement} />

      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        {
          achievements.length > 0 ? (
            achievements.map((achievement, index) => {
              return(
                <AchievementCardMenu achievement={achievement} removeAchievement={deleteAchievement} editAchievement={editAchievement} index={index} key={index} />
              )
            })
          ) : (
            <div className="col-span-2">
              <Empty icon={GoTrophy} title="No Achievements" description="Add new achievements with the button on the header of this card" />
            </div>
          )
        }
      </div>
    </Card>
  );
}