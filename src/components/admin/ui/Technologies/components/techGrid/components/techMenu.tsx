import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import TechCard from "./techCard";
import { Info } from "lucide-react";
import RemoveTech from "../../RemoveTech";

type TechMenuProps = {
  technology: Technology;
}

export default function TechMenu({
  technology,
}:TechMenuProps ): React.ReactElement {

  const handleRemove = () => {
    console.log("Tech removed...")
  }

  return (
    <DropdownMenu>

      <DropdownMenuTrigger>
        <TechCard technology={technology} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuLabel className="flex flex-row items-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4" />
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>

        <RemoveTech action={handleRemove} />

      </DropdownMenuContent>
      
    </DropdownMenu>
  );
}