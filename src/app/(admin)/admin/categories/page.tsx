import PageCard from "@/components/admin/PageCard";
import React from "react";
import { BiCategory } from "react-icons/bi";

export default function CategoriesPage(): React.ReactElement {

  const categoriesData = {
    icon: BiCategory,
    title: "Categories",
    description: "Here can you handle the projects categories.",
    
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={categoriesData}>
        <div>

        </div>
      </PageCard>  
    </div>
  );
}