import React from "react";
import { Copy } from "lucide-react";
import { twTheme } from "@/utils/ThemeColors";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({
  category,
}: CategoryCardProps): React.ReactElement {
  return (
    <div className="flex flex-row items-center gap-4 rounded-md border border-gray-200 shadow-sm p-2 hover:shadow-md hover:bg-green-50 transition-shadow cursor-pointer">

      <div className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 shadow-md bg-green-50" >
          <Copy size={20} color={twTheme.colors.emerald[600]} /> 
      </div>

      <p className="font-medium text-sm">{category.name}</p>
      
    </div>
  );
}
