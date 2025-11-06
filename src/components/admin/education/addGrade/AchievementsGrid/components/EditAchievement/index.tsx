import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import EditAchievementTrigger from "./components/EditAchievementTrigger";
import EditAchievementSheetHeader from "./components/editAchievementSheetHeader";
import EditAchievementForm from "./components/editAchievementForm";

type EditAchievementProps = {
  editAchievement: (index: number, updatedData: Partial<Achievement>) => void
  achievement: NewAchievement;
  index: number;
}

export default function EditAchievement({
  editAchievement,
  achievement,
  index,
}: EditAchievementProps ): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <EditAchievementTrigger />
      <SheetContent>

        <EditAchievementSheetHeader/>


        <EditAchievementForm editAchievement={editAchievement} onClose={()=>setOpen(false)} achievement={achievement} index={index} />

      </SheetContent>
    </Sheet>
  );
}
