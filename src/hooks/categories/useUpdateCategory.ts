import updateCategory from '@/services/categories/updateCategory';
import { useCategoriesStorage } from '@/storage/Admin/categoriesStorage';
import { AppErrorShape } from '@/utils/errorHandler';
import { useMutation } from "@tanstack/react-query";
import { toast } from 'sonner';

export default function useUpdateCategory() {

  const { updateCategory: updateCategoryInStorage } = useCategoriesStorage();

  const updateCategoryMutation = useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: (updatedCategory: Category ) => updateCategory(updatedCategory),
    onSuccess: (updatedCategory: Category) => {
      toast.success(`Category updated successfully.`);
      updateCategoryInStorage(updatedCategory);
    },
    onError: (error:AppErrorShape) => {
      toast.error(`Error Actualizando las categorías: ${error.message} en ${error.origin}`);
    }
  })

  return updateCategoryMutation;
}