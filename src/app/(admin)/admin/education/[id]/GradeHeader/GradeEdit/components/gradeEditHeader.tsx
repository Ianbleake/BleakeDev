import React from "react";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function GradeEditHeader(): React.ReactElement {
  return (
    <SheetHeader>
      <SheetTitle>Edit grade info</SheetTitle>
      <SheetDescription>
        Remember to save your changes when you are done.
      </SheetDescription>
    </SheetHeader>
  );
}