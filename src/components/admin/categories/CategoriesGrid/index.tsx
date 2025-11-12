import React from "react";
import CategoryCard from "./components/categoryCard";

type CategoriesGridProps = {
  categories: Category[];
}

export default function CategoriesGrid({
  categories,
}:CategoriesGridProps ): React.ReactElement {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        categories.map((category)=>{
          return(
            <CategoryCard category={category} key={category.id} />
          )
        })
      }
    </div>
  );
}