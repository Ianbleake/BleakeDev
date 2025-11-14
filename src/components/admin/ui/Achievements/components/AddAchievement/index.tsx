import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import AchievementAddTrigger from "./components/achievementAddTrigger";
import AchievementAddHeader from "./components/achievementAddHeader";
import AchievementAddForm from "./components/achievementAddForm";

export default function AddAchivement(): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >

      <AchievementAddTrigger />

      <SheetContent>

        <AchievementAddHeader/>

        <AchievementAddForm onClose={() => setOpen(false)}/>

      </SheetContent>

    </Sheet>
  );
}