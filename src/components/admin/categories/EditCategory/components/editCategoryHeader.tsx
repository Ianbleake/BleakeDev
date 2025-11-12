import React from "react";
import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function EditCategoryHeader(): React.ReactElement {
  return (
    <SheetHeader>
            
      <SheetTitle>
        Edit Category
      </SheetTitle>

      <SheetDescription>
        Remember save your changes
      </SheetDescription>

    </SheetHeader>
  );
}