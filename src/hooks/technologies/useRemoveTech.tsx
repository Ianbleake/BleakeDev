import removeTech from "@/services/technologies/ removeTech";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type RemoveTechPayload = {
  techId: string;
  ownerId: string;
  type: string;
}

export default function useRemoveTech () {

  const removeTechMutation = useMutation({
    mutationKey:["removeeTech"],
    mutationFn: ( removePayload: RemoveTechPayload) => removeTech(removePayload),
    onSuccess: () => {
      toast.success("Technology removed succesfuly");
    },
    onError: ( error: AppErrorShape ) => {
      console.log("Error:",error.message,"Origin:",error.origin)
      toast.error(error.message)
    }
  })

  return removeTechMutation;
}