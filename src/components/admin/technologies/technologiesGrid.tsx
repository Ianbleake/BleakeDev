import React from "react";
import TechCard from "./techCard";

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
          <TechCard key={tech.id} tech={tech} />
        ))
      }
    </div>
  );
}