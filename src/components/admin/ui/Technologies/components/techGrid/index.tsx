import React from "react";
import TechMenu from "./components/techMenu";

type TechGridProps = {
  technologies: Technology[];
  ownerId: string;
};

export default function TechGrid({
  technologies,
  ownerId,
}: TechGridProps ): React.ReactElement {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        technologies.map((technology) => {
          return(
            <TechMenu ownerId={ownerId} key={technology.id} technology={technology} />
          );
        })
      }
    </div>
  );
}