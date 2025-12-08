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
    (set) => ({
      experiences: null,
      setExperiences: (experiences) => set({ experiences }),
      addExperience: (experience) =>
        set((state) => ({
          experiences: state.experiences
            ? [...state.experiences, experience]
            : [experience],
        })),
      removeExperience: (id) =>
        set((state) => ({
          experiences: state.experiences
            ? state.experiences.filter((exp) => exp.id !== id)
            : null,
        })),
      updateExperience: (updatedData) =>
        set((state) => ({
          experiences: state.experiences
            ? state.experiences.map((exp) =>
                exp.id === updatedData.id ? { ...exp, ...updatedData } : exp
              )
            : null,
        })),
      clearExperiences: () => set({ experiences: null }),
    }),
    {
      name: "experience-storage",
    }
  )
);
