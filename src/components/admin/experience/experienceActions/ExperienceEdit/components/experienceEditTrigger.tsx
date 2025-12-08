import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SheetTrigger } from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import React from "react";

export default function ExperienceEditTrigger(): React.ReactElement {
  return (
    <SheetTrigger asChild>
      <DropdownMenuItem onSelect={(e) => e.preventDefault()} >
        <Pencil className="mr-2 h-4 w-4" />
        Edit
      </DropdownMenuItem>
    </SheetTrigger>
  );
}