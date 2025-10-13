import React from "react";

type TechCardProps = {
  tech: string;
}

export default function TechCard({
  tech,
}:TechCardProps): React.ReactElement {
  return (
  <div className="h-fit bg-emerald-800/50 text-emerald-100 px-3 py-2 rounded-lg text-sm font-medium text-center border border-emerald-500/20">
    {tech}
  </div>
  );
}