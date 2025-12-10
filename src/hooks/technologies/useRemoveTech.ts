import removeTech from "@/services/technologies/ removeTech";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type RemoveTechPayload = {
  techId: string;
  ownerId: string;
  type: string;
}

export default function useRemoveTech () {

  const { removeTechnology } = useDetailExperienceStorage();

  const removeTechMutation = useMutation({
    mutationKey:["removeeTech"],
    mutationFn: ( removePayload: RemoveTechPayload) => removeTech(removePayload),
    onSuccess: (techId:string) => {
      toast.success("Technology removed succesfuly");
      removeTechnology(techId);
    },
    onError: ( error: AppErrorShape ) => {
      console.log("Error:",error.message,"Origin:",error.origin)
      toast.error(error.message)
    }
  })

  return removeTechMutation;
}