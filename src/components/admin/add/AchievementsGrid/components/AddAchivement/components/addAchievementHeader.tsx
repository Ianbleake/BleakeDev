import React from "react";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function AddAchievementHeader(): React.ReactElement {
  return (
    <SheetHeader>
      <SheetTitle>Add Achievement</SheetTitle>
      <SheetDescription>
        Remember to save your changes when you are done.
      </SheetDescription>
    </SheetHeader>
  );
}