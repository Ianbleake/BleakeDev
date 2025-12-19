import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React from "react";

export default function EditTechHeader(): React.ReactElement {
  return (
    <SheetHeader>
      <SheetTitle>
        Edit Technology
      </SheetTitle>
      <SheetDescription>
        Remember save your changes
      </SheetDescription>
    </SheetHeader>
  );
}