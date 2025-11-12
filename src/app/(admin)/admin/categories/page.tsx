'use client'

import AddCategory from "@/components/admin/categories/AddCategory";
import CategoriesGrid from "@/components/admin/categories/CategoriesGrid";
import NoData from "@/components/admin/ui/NoData";

import PageCard from "@/components/admin/ui/PageCard";
import CategoryCardSkeleton from "@/components/skeletons/categoryCardSkeleton";
import PageCardSkeleton from "@/components/skeletons/pageCardSkeleton";
import useCategories from "@/hooks/categories/useCategories";
import { useCategoriesStorage } from "@/storage/Admin/categoriesStorage";
import { Copy } from "lucide-react";
import React from "react";


export default function CategoriesPage(): React.ReactElement {

  const { isLoading } = useCategories();

  const { categories } = useCategoriesStorage();

  const hasNoData = categories === null;

  const categoriesData = {
    icon: Copy,
    title: "Categories",
    description: "Here can you handle the projects categories.",
    action: <AddCategory />,
  };

  if(isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-6">
        <PageCardSkeleton>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <CategoryCardSkeleton key={i} />
            ))}
          </div>
        </PageCardSkeleton>
      </div>
    );
  }

  if(hasNoData) {
    return <NoData/>;
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={categoriesData}>
        <CategoriesGrid categories={categories} />
      </PageCard>  
    </div>
  );
}