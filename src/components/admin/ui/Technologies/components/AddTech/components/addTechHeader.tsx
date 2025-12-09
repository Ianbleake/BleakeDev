import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React from "react";

export default function AddTechHeader(): React.ReactElement {
  return (
    <SheetHeader>
      <SheetTitle>Add technology</SheetTitle>
      <SheetDescription>
        Remember to save your changes when you are done.
      </SheetDescription>
    </SheetHeader>
  );
}