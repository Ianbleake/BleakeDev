import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import GradeEditTrigger from "./components/gradeEditTrigger";
import GradeEditHeader from "./components/gradeEditHeader";
import GradeEditForm from "./components/gradeEditForm";

type GradeEditProps = {
  grade: GradeData;
}

export default function GradeEdit({
  grade,
}:GradeEditProps ): React.ReactElement {

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <GradeEditTrigger/>

      <SheetContent>
        
        <GradeEditHeader/>

        <GradeEditForm grade={grade} onClose={() => setOpen(false)}/>

      </SheetContent>
    </Sheet>
  );
}