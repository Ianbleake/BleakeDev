import { SheetTrigger } from "@/components/ui/sheet";
import { merge } from "@/utils/mergeStyles";
import React from "react";
import { GoTrophy } from "react-icons/go";

export default function AddAchievementTrigger(): React.ReactElement {

  const triggerStyle = "h-9 px-4 py-2 has-[>svg]:px-3 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

  return (
    <SheetTrigger className={merge(triggerStyle,"text-md font-normal cursor-pointer select-none")}>      
      <GoTrophy />
      Add Achievement
    </SheetTrigger>
  );
}