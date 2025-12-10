import React from "react";
import TechMenu from "./components/techMenu";

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
            <TechMenu key={technology.id} technology={technology} />
          );
        })
      }
    </div>
  );
}