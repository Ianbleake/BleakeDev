import { useMutation } from "@tanstack/react-query";
import addTechnology from "@/services/technologies/addTechnology";
import { toast } from "sonner";
import { AppErrorShape } from "@/utils/errorHandler";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";

type AddTechPayload = {
  owner: string;
  technologyId: string;
  type: string;
  techData: Technology | undefined;
};

export default function useAddTech() {

  const { addTechnology: addTechStorage } = useDetailExperienceStorage();

  const mutation = useMutation({
    mutationFn: (payload: AddTechPayload) => addTechnology(payload),

    onSuccess: (newTech) => {
      toast.success("Technology added!");
      addTechStorage(newTech as Technology);
    },

    onError: (error: AppErrorShape) => {
      console.log(error.message, error.origin);
      if(error.message === "This technology already exist."){
        toast.warning(error.message);
      }else{
        toast.error(error.message);
      }

    },
  });

  return mutation;
}
