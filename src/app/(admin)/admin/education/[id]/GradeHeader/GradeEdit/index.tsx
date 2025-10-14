import React from "react";
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

  return (
    <Sheet>

      <GradeEditTrigger/>

      <SheetContent>
        
        <GradeEditHeader/>

        <GradeEditForm grade={grade}/>

      </SheetContent>
    </Sheet>
  );
}