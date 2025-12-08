import { create } from "zustand";
import { persist } from "zustand/middleware";

type ExperienceState = {
  experiences: Experience[] | null;
  setExperiences: (experiences: Experience[] | null) => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (id: string) => void;
  updateExperience: (updatedData: ExperienceInfo) => void;
  clearExperiences: () => void;
};

export const useExperienceStorage = create<ExperienceState>()(
  persist(
    (set, get) => ({
      experiences: null,

      setExperiences: (experiences) => set({ experiences }),

      addExperience: (experience) => {
        const current = get().experiences;

     
        if (current?.some((exp) => exp.id === experience.id)) return;

        set({
          experiences: current ? [...current, experience] : [experience],
        });
      },

      removeExperience: (id) => {
        const current = get().experiences;

        set({
          experiences: current
            ? current.filter((exp) => exp.id !== id)
            : null,
        });
      },

      updateExperience: (updatedInfo) => {
        const current = get().experiences;
        if (!current) return;
      
        set({
          experiences: current.map((exp) => {
            if (exp.id !== updatedInfo.id) return exp;
            
            return {
              ...exp,
              company: updatedInfo.company ?? exp.company,
              position: updatedInfo.position ?? exp.position,
              location: updatedInfo.location ?? exp.location,
              period: updatedInfo.period ?? exp.period,
              description: updatedInfo.description ?? exp.description,
              type: updatedInfo.type ?? exp.type,
            };
          }),
        });
      },      

      clearExperiences: () => set({ experiences: null }),
    }),
    {
      name: "experience-storage",
    }
  )
);
