import { SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import CategoryCard from "../../categoryCard";

type EditCategoryTriggerProps = {
  category: Category;
}

export default function EditCategoryTrigger({
  category,
}:EditCategoryTriggerProps): React.ReactElement {
  return (
    <SheetTrigger>
      <CategoryCard category={category}/>
    </SheetTrigger>
  );
}