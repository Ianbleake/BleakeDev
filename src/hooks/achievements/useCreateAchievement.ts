import { createAchievement } from "@/services/achievements/createAchievement";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateAchievement() {

  const { addAchievemnent: addGradeAchievement } = useGradeStorage();

  const { addAchievement: addExperienceAchievement } = useDetailExperienceStorage();
 
  const addAchievementMutation = useMutation({

    mutationKey: ["createAchievement"],
    mutationFn: async (achieventData: AddAchievementPayload) => {
      return createAchievement(achieventData);
    },
    onSuccess: (newAchievement) => {
      if(newAchievement.type === "certification" || newAchievement.type === "education"){
        addGradeAchievement(newAchievement);
      }

      if(newAchievement.type === "experience"){
        addExperienceAchievement(newAchievement);
      }

      toast.success("Nuevo logro desbloqueado");
    },
    onError: (error) => {
      toast.error(error.message);
    }

  })

  return addAchievementMutation;
}