'use client'

import AddCategory from "@/components/admin/categories/AddCategory";
import CategoriesGrid from "@/components/admin/categories/CategoriesGrid";

import PageCard from "@/components/admin/ui/PageCard";
import PageCardSkeleton from "@/components/skeletons/pageCardSkeleton";
import useCategories from "@/hooks/categories/useCategories";
import { useCategoriesStorage } from "@/storage/Admin/categoriesStorage";
import { Copy } from "lucide-react";
import React from "react";


export default function CategoriesPage(): React.ReactElement {

  const { isLoading } = useCategories();

  const isLoadingTest = true;

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
          <></>
        </PageCardSkeleton>
      </div>
    );
  }

  if(hasNoData) {
    return <></>;
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={categoriesData}>
        <CategoriesGrid categories={categories} />
      </PageCard>  
    </div>
  );
}