
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import CategoryCard from "../categoryCard";
import { Info } from "lucide-react";
import EditCategory from "../EditCategory";
import RemoveCategory from "./removeCategory";
import useDeleteCategory from "@/hooks/categories/useDeleteCategory";

type CategoryActionsProps = {
  category: Category;
};

export default function CategoryActions({
  category,
}:CategoryActionsProps): React.ReactElement {

  const { mutate } = useDeleteCategory();

  return (
    <DropdownMenu>

      <DropdownMenuTrigger>
        <CategoryCard category={category} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuLabel className="flex flex-row items-center justify-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4" />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <EditCategory category={category}/>

        <RemoveCategory action={() => mutate(category.id)} />

      </DropdownMenuContent>

    </DropdownMenu>
  );
}