import { create } from "zustand";
import { persist } from "zustand/middleware";

type ExperienceState = {
  experiences: Experience[] | null;
  setExperiences: (experiences: Experience[] | null) => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (id: string) => void;
  updateExperience: (updatedData: Experience) => void;
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

      updateExperience: (updatedData) => {
        const current = get().experiences;

        set({
          experiences: current
            ? current.map((exp) =>
                exp.id === updatedData.id ? { ...exp, ...updatedData } : exp
              )
            : null,
        });
      },

      clearExperiences: () => set({ experiences: null }),
    }),
    {
      name: "experience-storage",
    }
  )
);
