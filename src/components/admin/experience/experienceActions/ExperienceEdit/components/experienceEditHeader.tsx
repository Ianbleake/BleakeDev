import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React from "react";

export default function ExperienceEditHeader(): React.ReactElement {
  return (
    <SheetHeader className="py-0 pt-2">
      <SheetTitle>Edit experience info</SheetTitle>
      <SheetDescription>
        Remember to save your changes when you are done.
      </SheetDescription>
    </SheetHeader>
  );
}