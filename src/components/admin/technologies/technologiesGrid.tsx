import React from "react";
import PageItem from "../ui/pageItem";
import { Cpu } from "lucide-react";

type TechnologiesGridProps = {
  techs: Technology[];
}

export default function TechnologiesGrid({
  techs,
}:TechnologiesGridProps ): React.ReactElement {

  return (
    <div className="grid grid-cols-4 gap-4">
      {
        techs.map((tech) => (
          <PageItem key={tech.id} item={{ icon: Cpu , name: tech.name }} size="small" />
        ))
      }
    </div>
  );
}