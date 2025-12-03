import React from "react";

type TechCardProps = {
  technology: Technology;
}

export default function TechCard({
  technology,
}: TechCardProps ): React.ReactElement {
  return (
    <div>TechCard: {technology.name} </div>
  );
}