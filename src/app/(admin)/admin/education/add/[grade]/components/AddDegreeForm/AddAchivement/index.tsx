import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import AddAchievementTrigger from "./components/addAchievementTrigger";
import AddAchievementHeader from "./components/addAchievementHeader";
import AddAchievementForm from "./components/addAchievementForm";

type AddAchievementProps = {
  addAchievement: (achievement: Omit<Achievement, "id" | "grade_id" | "grade_type" >) => void;
}

export default function AddAchivement({
  addAchievement,
}:AddAchievementProps): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >

      <AddAchievementTrigger/>

      <SheetContent>

        <AddAchievementHeader/>

        <AddAchievementForm addAchievement={addAchievement} onClose={() => setOpen(false)} />

      </SheetContent>

    </Sheet>
  );
}