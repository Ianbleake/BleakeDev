import updateTech from "@/services/technologies/updateTech";
import { useTechStorage } from "@/storage/Admin/techStorage";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function  useUpdateTech() {

  const { updateTech: updateTechStorage } = useTechStorage();

  const updateTechMutation = useMutation({
    mutationKey: ["updateTech"],
    mutationFn: (updatedTech: Technology) => updateTech(updatedTech),
    onSuccess: (updatedTech: Technology ) => {
      toast.success("Technology updated successfully");
      updateTechStorage(updatedTech);
    },
    onError: (error: AppErrorShape) => {
      console.error("Error updating technology:", error.message, error.origin);
      toast.error(`Error updating technology: ${error.message}`);
    }

  })

  return updateTechMutation;
}