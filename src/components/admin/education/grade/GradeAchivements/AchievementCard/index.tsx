
import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import AchievementEditTriggerCard from "./components/achievementEditTriggerCard";
import AchievementEditHeader from "./components/achievementEditHeader";
import AchievementEditForm from "./components/achievementEditForm";



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

        <AchievementEditForm achievement={achievement} onClose={()=>setOpen(false)}/>

      </SheetContent>

    </Sheet>
  );
}