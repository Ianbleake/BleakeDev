import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import PageItem from "../../../ui/pageItem";
import { Cpu, Info } from "lucide-react";
import EditTech from "../../EditTech";
import RemoveTech from "../../removeTech";
import useDeleteTech from "@/hooks/technologies/useDeleteTech";


type TechCardProps = {
  tech: Technology;
}

export default function TechCard({
  tech,
}: TechCardProps ): React.ReactElement {

  const { mutate: deleteTech } = useDeleteTech();

  const handleRemove = () => {
    deleteTech(tech.id);
  }

  return (
    <DropdownMenu>

      <DropdownMenuTrigger>
        <PageItem key={tech.id} item={{ icon: Cpu , name: tech.name }} size="small" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        
        <DropdownMenuLabel className="flex flex-row items-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4" />
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>

        <EditTech tech={tech}/>

        <RemoveTech action={handleRemove}/>

      </DropdownMenuContent>

    </DropdownMenu>
  );
}