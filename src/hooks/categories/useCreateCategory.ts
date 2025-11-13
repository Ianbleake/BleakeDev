import createCategory from "@/services/categories/createCategory";
import { useCategoriesStorage } from "@/storage/Admin/categoriesStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateCategory() {

  const { addCategory } = useCategoriesStorage();

  const createCategoryMutation = useMutation({
    mutationKey: ["createCategory"],
    mutationFn: async (newCategory: Omit<Category, "id">): Promise<Category> => createCategory(newCategory),
    onSuccess: (newCategory:Category) => {
      addCategory(newCategory);
      toast.success("Category created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return createCategoryMutation;
}