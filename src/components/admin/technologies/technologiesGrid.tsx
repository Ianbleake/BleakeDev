import React from "react";
import CategoryCard from "../categories/CategoriesGrid/components/categoryCard";

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
          <CategoryCard category={tech} key={tech.id} />
        ))
      }
    </div>
  );
}