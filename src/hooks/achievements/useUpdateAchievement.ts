import { updateAchievement } from "@/services/achievements/updateAchievement";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateAchievement() {

  const { renewAchievement } = useGradeStorage();

  const updateAchievementMutation = useMutation({
    mutationKey: ["updateAchievement"],
    mutationFn: async (updatedAchievement: Achievement) => updateAchievement(updatedAchievement),
    onSuccess: (updatedAchievement) => {
      renewAchievement(updatedAchievement);
      toast.success("Achievement updated successfully");
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return updateAchievementMutation;
}