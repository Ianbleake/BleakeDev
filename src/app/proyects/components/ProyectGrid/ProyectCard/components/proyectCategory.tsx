import React from "react";

type ProyectCategoryProps = {
  category: string;
}

export default function ProyectCategory({
  category,
}:ProyectCategoryProps): React.ReactElement {
  return (

    <div className="absolute bottom-4 right-4">
      <div className="text-white/70 text-sm font-medium mb-1">
        {category}
      </div>
    </div>
  );
}