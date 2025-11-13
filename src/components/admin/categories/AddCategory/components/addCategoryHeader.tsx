import React from "react";
import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function AddCategoryHeader(): React.ReactElement {
  return (
    <SheetHeader>
            
      <SheetTitle>
        Add Category
      </SheetTitle>

      <SheetDescription>
        Remember save your changes
      </SheetDescription>

    </SheetHeader>
  );
}