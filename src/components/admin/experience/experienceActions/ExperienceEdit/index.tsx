import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import ExperienceEditTrigger from "./components/experienceEditTrigger";
import ExperienceEditHeader from "./components/experienceEditHeader";
import ExperienceEditForm from "./components/experienceEditForm";

type ExperienceEditProps = {
  experience: ExperienceInfo;
}

export default function ExperienceEdit({
  experience,
}: ExperienceEditProps ): React.ReactElement {

  const [open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >

      <ExperienceEditTrigger/>

      <SheetContent>

        <ExperienceEditHeader/>

        <ExperienceEditForm experience={experience} onClose={()=>setOpen(false)}/>
      </SheetContent>

    </Sheet>
  );
}