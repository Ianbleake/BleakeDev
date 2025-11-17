import { updateAchievement } from "@/services/achievements/updateAchievement";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateAchievement() {

  const { renewAchievement: renewGradeAchievement } = useGradeStorage();
  const { updateAchievement: renewExperienceAchievement } = useDetailExperienceStorage();

  const updateAchievementMutation = useMutation({
    mutationKey: ["updateAchievement"],
    mutationFn: async (updatedAchievement: Achievement) => updateAchievement(updatedAchievement),
    onSuccess: (updatedAchievement: Achievement) => {
      if(updatedAchievement.type === "certification" || updatedAchievement.type === "degree"){
        renewGradeAchievement(updatedAchievement);
      }
      if(updatedAchievement.type === "experience"){
        renewExperienceAchievement(updatedAchievement);
      }
      toast.success("Achievement updated successfully");
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return updateAchievementMutation;
}