import CategoriesGrid from "@/components/admin/categories/CategoriesGrid";
import EditCategory from "@/components/admin/categories/EditCategory";
import PageCard from "@/components/admin/ui/PageCard";
import { Copy } from "lucide-react";
import React from "react";


export default function CategoriesPage(): React.ReactElement {

  const categoriesData = {
    icon: Copy,
    title: "Categories",
    description: "Here can you handle the projects categories.",
    action: <EditCategory />,
  };  

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={categoriesData}>
        <CategoriesGrid/>
      </PageCard>  
    </div>
  );
}