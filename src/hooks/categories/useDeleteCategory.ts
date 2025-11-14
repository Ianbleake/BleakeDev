import deleteCategory from "@/services/categories/deleteCategory";
import { useCategoriesStorage } from "@/storage/Admin/categoriesStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteCategory() {

  const { removeCategory } = useCategoriesStorage();

  const deleteCategoryMutation = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: (categoryId: string) => {
      toast.success("Category deleted successfully");
      removeCategory(categoryId);
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return deleteCategoryMutation;
}