import React from "react";
import CategoryActions from "./components/CategoryActions";

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
            <CategoryActions category={category} key={category.id} />
          )
        })
      }
    </div>
  );
}