import createExperience from "@/services/experience/createExperience";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createAchievement } from '@/services/achievements/createAchievement';
import { useRouter } from "next/navigation";

export default function useCreateExperience() {

  const router = useRouter();

  const createExperienceMutation = useMutation({
    mutationKey: ['createExperience'],
    mutationFn: async (newExperience: NewExperience) => {

      const { achievements, ...experienceData } = newExperience;

      const createdExperience = await createExperience(experienceData);

      if( achievements.length > 0 && createdExperience?.id ) {

        const newAchievements = achievements.map((achievement: NewAchievement) => ({
          description: achievement.description,
          element_id: createdExperience.id,
          type: 'experience',
        }));

        const createdAchievements = await Promise.all(
          newAchievements.map((achievement: AddAchievementPayload) => createAchievement(achievement))
        );

        return { ...createdExperience, achievements: createdAchievements };

      }

      return createdExperience;

    },
    onSuccess: () => {
      toast.success("Experience created successfully");
      router.push("/admin/education"); 
    },
    onError: () => {
      toast.error("Error creating experience");
    }
  })

  return createExperienceMutation;

}