
import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import AchievementEditTriggerCard from "./components/achievementEditTriggerCard";
import AchievementEditHeader from "./components/achievementEditHeader";



type AchievementCardProps = {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}:AchievementCardProps ): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      

      <AchievementEditTriggerCard achievement={achievement} />

      <SheetContent>

        <AchievementEditHeader/>

        {/* <AchievementAddForm onClose={() => setOpen(false)}/> */}

      </SheetContent>

    </Sheet>
  );
}