import PageCard from "@/components/admin/PageCard";
import { Copy } from "lucide-react";
import React from "react";


export default function CategoriesPage(): React.ReactElement {

  const categoriesData = {
    icon: Copy,
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