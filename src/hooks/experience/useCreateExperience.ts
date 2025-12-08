import createExperience from "@/services/experience/createExperience";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createAchievement } from '@/services/achievements/createAchievement';
import { useRouter } from "next/navigation";
import { useExperienceStorage } from "@/storage/Admin/experienceStorage";

export default function useCreateExperience() {

  const router = useRouter();

  const { addExperience } = useExperienceStorage();

  const createExperienceMutation = useMutation({
    mutationKey: ['createExperience'],
    mutationFn: async (newExperience: NewExperience): Promise<Experience> => {

      const { achievements, ...experienceData } = newExperience;
    
      const createdExperience = await createExperience(experienceData);
    
      if (achievements.length > 0 && createdExperience ) {
    
        const newAchievements = achievements.map((achievement: NewAchievement) => ({
          description: achievement.description,
          element_id: createdExperience?.id,
          type: 'experience',
        }));
    
        const createdAchievements = await Promise.all(
          newAchievements.map((achievement: AddAchievementPayload) =>
            createAchievement(achievement)
          )
        );
    
        return { ...createdExperience, achievements: createdAchievements };
      }
    
      return createdExperience as Experience;
    },
    
    onSuccess: (newExperience: Experience) => {
      addExperience(newExperience);
      toast.success("Experience created successfully");
      router.push("/admin/experience"); 
    },
    onError: () => {
      toast.error("Error creating experience");
    }
  })

  return createExperienceMutation;

}