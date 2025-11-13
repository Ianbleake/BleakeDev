import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import CategoryCard from "../categoryCard";

type EditCategoryProps = {
  category: Category;
}

export default function EditCategory({
  category,
}:EditCategoryProps): React.ReactElement {
  return (
    <Sheet>

      <SheetTrigger>
        <CategoryCard category={category}/>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Edit Category
          </SheetTitle>
          <SheetDescription>
            Remember save your changes
          </SheetDescription>
        </SheetHeader>

        <div className="px-4">
          Edit Category
        </div>

      </SheetContent>
      
    </Sheet>
  );
}