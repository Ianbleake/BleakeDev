import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React from "react";

export default function AddTechHeader(): React.ReactElement {
  return (
    <SheetHeader>
            
      <SheetTitle>
        Add Technology
      </SheetTitle>

      <SheetDescription>
        Remember save your changes
      </SheetDescription>

    </SheetHeader>
  );
}