
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { useState } from "react";
import AchievementEditTrigger from "./components/achievementEditTrigger";
import AchievementEditHeader from "./components/achievementEditHeader";
import { GoTrophy } from "react-icons/go";
import { twTheme } from "@/utils/ThemeColors";
import { Card } from "@/components/ui/card";


type AchievementCardProps = {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}:AchievementCardProps ): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      
      <SheetTrigger asChild>
        <Card className="flex flex-row gap-4 items-center px-4 hover:bg-green-50 cursor-pointer">
          <GoTrophy size={30} color={twTheme.colors.emerald[600]} />
          <p className="text-gray-400 text-sm font-normal">{achievement.description}</p>
        </Card>
      </SheetTrigger>


      <SheetContent>

        <AchievementEditHeader/>

        {/* <AchievementAddForm onClose={() => setOpen(false)}/> */}

      </SheetContent>

    </Sheet>
  );
}