import React from "react";
import { IconType } from "react-icons";

//? Use this component when lists or grids has no elements

type EmptyProps = {
  icon: IconType;
  title: string;
  description?: string;
}

export default function Empty({
  icon,
  title,
  description,
}: EmptyProps ): React.ReactElement {

  const Icon = icon;

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-muted-foreground border-3 border-dashed rounded-2xl">
      <Icon className="text-4xl mb-3 opacity-70" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}