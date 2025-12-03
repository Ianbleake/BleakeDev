import { create } from "zustand";

type DetailExperienceState = {
    detailInfo: ExperienceInfo | null;
    achievements: Achievement[];
    technologies: Technology[];

    setDetailExperienceData: ( detailInfo: ExperienceInfo | null, achievements: Achievement[], technologies: Technology[] ) => void;
    setDetailInfo: (experience: Experience | null ) => void;

    addAchievement: (achievement: Achievement) => void;
    updateAchievement: (achievement: Achievement) => void;
    removeAchievement: (achievementId: string) => void;
}

export const useDetailExperienceStorage = create<DetailExperienceState>((set) => ({

    detailInfo: null,
    achievements: [],
    technologies: [],

    setDetailExperienceData: ( detailInfo, achievements, technologies ) => set({ detailInfo, achievements, technologies }),

    addAchievement: (achievement) => set((state) => ({ achievements: [ ...state.achievements, achievement ] })),
    updateAchievement: (achievement) => set((state) => ({
        achievements: state.achievements.map((a) => a.id === achievement.id ? achievement : a)
    })),
    removeAchievement: (achievementId) => set((state) => ({
        achievements: state.achievements.filter((a) => a.id !== achievementId)
    })),
    
    setDetailInfo: (experience) => set({ detailInfo: experience }),
}))