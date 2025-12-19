import deleteTech from "@/services/technologies/deleteTech";
import { useTechStorage } from "@/storage/Admin/techStorage";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteTech() {

  const { removeTech } = useTechStorage();

  const deleteTechMutation = useMutation({
    mutationKey: ["deleteTech"],
    mutationFn: (techId: string) => deleteTech(techId),
    onSuccess: (techId: string) => {
      toast.success("Technology deleted successfully.");
      removeTech(techId);
    },
    onError: (error: AppErrorShape) => {
      console.error("Error deleting technology:", error);
      toast.error(`Something went wrong while deleting the technology: ${error.message}` );
    }
  })

  return deleteTechMutation;
  
}