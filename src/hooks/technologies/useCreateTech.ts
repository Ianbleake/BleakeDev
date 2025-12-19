import createTech from "@/services/technologies/createTech";
import { useTechStorage } from "@/storage/Admin/techStorage";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateTech() {

  const { addTech } = useTechStorage();

  const createTechMutation = useMutation({
    mutationKey: ["createTech"],
    mutationFn: (newTech: NewTechnology) => createTech(newTech),
    onSuccess: (newTech:Technology) => {
      toast.success("Technology created successfully");
      addTech(newTech);
    },
    onError: (error: AppErrorShape) => {
      console.log("Error:",error.message, error.origin);
      toast.error(`Error creating technology: ${error.message}`);
    }
  })

  return createTechMutation;
}