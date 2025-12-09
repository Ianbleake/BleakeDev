import { create } from "zustand";

type DetailExperienceState = {
  detailInfo: ExperienceInfo | null;
  achievements: Achievement[];
  technologies: Technology[];

  setDetailExperienceData: (
    detailInfo: ExperienceInfo | null,
    achievements: Achievement[],
    technologies: Technology[]
  ) => void;

  setDetailInfo: (info: ExperienceInfo | null) => void;
  updateDetailInfo: (newInfo: Partial<ExperienceInfo>) => void;

  addAchievement: (achievement: Achievement) => void;
  updateAchievement: (achievement: Achievement) => void;
  removeAchievement: (achievementId: string) => void;

  addTechnology: (newTechnology: Technology) => void;
};

export const useDetailExperienceStorage = create<DetailExperienceState>((set ) => ({
  detailInfo: null,
  achievements: [],
  technologies: [],

  setDetailExperienceData: (detailInfo, achievements, technologies) =>
    set({ detailInfo, achievements, technologies }),

  setDetailInfo: (info) => set({ detailInfo: info }),

  updateDetailInfo: (newInfo) =>
    set((state) => {
      if (!state.detailInfo) return state; // nada que actualizar
      return {
        detailInfo: {
          ...state.detailInfo,
          ...newInfo,
        },
      };
    }),

  addAchievement: (achievement) =>
    set((state) => {
      // evita duplicados si ya existe el achievement
      if (state.achievements.some((a) => a.id === achievement.id)) {
        return state;
      }

      return {
        achievements: [...state.achievements, achievement],
      };
    }),

  updateAchievement: (achievement) =>
    set((state) => ({
      achievements: state.achievements.map((a) =>
        a.id === achievement.id ? achievement : a
      ),
    })),

  removeAchievement: (achievementId) =>
    set((state) => ({
      achievements: state.achievements.filter((a) => a.id !== achievementId),
    })),

  addTechnology: (newTechnology) => 
    set((state) => {

      if(state.technologies.some((a) => a.id === newTechnology.id)){
        return state;
      }

      return {
        technologies: [...state.technologies,newTechnology],
      }
      
    }),

}));
