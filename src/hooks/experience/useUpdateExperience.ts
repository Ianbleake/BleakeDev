import updateExperienceInfo from "@/services/experience/updateExperienceInfo";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { useExperienceStorage } from "@/storage/Admin/experienceStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateExperience () {

  const { updateExperience } = useExperienceStorage();
  const { updateDetailInfo } = useDetailExperienceStorage();

  const updateExperienceMutation = useMutation({
    mutationKey: ["updateExperience"],
    mutationFn: (updatedExperience: ExperienceInfo) => updateExperienceInfo(updatedExperience),
    onSuccess: (experienceUpdated: ExperienceInfo) => {
      toast.success("Experience updated succesful.");
      updateDetailInfo(experienceUpdated);
      updateExperience(experienceUpdated);
    },
    onError: (error) => {
      toast.error(error.message)
    }

  })

  return updateExperienceMutation;
  
}