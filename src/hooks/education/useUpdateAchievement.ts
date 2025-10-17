import { updateAchievement } from "@/services/education/updateAchievement";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateAchievement() {

  const updateAchievementMutation = useMutation({
    mutationKey: ["updateAchievement"],
    mutationFn: async (updatedAchievement: Achievement) => updateAchievement(updatedAchievement),
    onSuccess: () => {
      toast.success("Achievement updated successfully");
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return updateAchievementMutation;
}