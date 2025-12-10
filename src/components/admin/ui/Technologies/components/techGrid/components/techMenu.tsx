import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import TechCard from "./techCard";
import { Info } from "lucide-react";
import RemoveTech from "../../RemoveTech";
import useRemoveTech from "@/hooks/technologies/useRemoveTech";

type TechMenuProps = {
  technology: Technology;
  ownerId: string;
}

export default function TechMenu({
  technology,
  ownerId,
}:TechMenuProps ): React.ReactElement {

  const { mutate: removeTech } = useRemoveTech();

  const handleRemove = () => {
    
    const removedTechData = {
      techId: technology.id,
      ownerId: ownerId,
      type: "experience",
    }

    removeTech(removedTechData)
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