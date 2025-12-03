import createExperience from "@/services/experience/createExperience";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateExperience() {

  const createExperienceMutation = useMutation({
    mutationKey: ['createExperience'],
    mutationFn: (newExperience: NewExperience) => createExperience(newExperience),
    onSuccess: () => {
      toast.success("Experience created successfully");
    },
    onError: () => {
      toast.error("Error creating experience");
    }
  })

  return createExperienceMutation;

}