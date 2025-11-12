import getCategories from "@/services/categories/getCategories";
import { useCategoriesStorage } from "@/storage/Admin/categoriesStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useCategories () {

  const { setCategories } = useCategoriesStorage()

  const categoriesQuery = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    if(categoriesQuery.isError){
      toast.error(categoriesQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[categoriesQuery.isError])

  useEffect(() => {
    if(categoriesQuery.data){
      setCategories(categoriesQuery.data);
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[categoriesQuery.data])

  return {
    query: categoriesQuery,
    categories: categoriesQuery.data,
    isLoading: categoriesQuery.isLoading
  }
}