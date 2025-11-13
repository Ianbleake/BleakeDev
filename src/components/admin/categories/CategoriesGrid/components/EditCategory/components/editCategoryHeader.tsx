import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React from "react";

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