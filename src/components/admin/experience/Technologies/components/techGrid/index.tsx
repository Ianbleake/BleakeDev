import React from "react";
import TechCard from "./components/techCard";

type TechGridProps = {
  technologies: Technology[];
};

export default function TechGrid({
  technologies,
}: TechGridProps ): React.ReactElement {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        technologies.map((technology) => {
          return(
            <TechCard key={technology.id} technology={technology} />
          );
        })
      }
    </div>
  );
}