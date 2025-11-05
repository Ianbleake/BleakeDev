import { create } from "zustand";

type GradeState = {
  grade: Grade | null;
  type: string;
  gradeInfo: GradeInfo | null;
  achievements: Achievement[];

  setGradeData: ( type: string, grade: Grade | null, gradeInfo: GradeInfo, achievements:Achievement[] ) => void;
  updateGradeInfo: (updatedGradeInfo: GradeInfo) => void,
  clearGrade: () => void;
  addAchievemnent: ( achievement: Achievement ) => void;
  removeAchievement: ( achievementId: string ) => void;
  renewAchievement: ( updatedAchievement: Achievement ) => void;
}

export const useGradeStorage = create<GradeState>(( set ) => ({

  type: "",
  grade: null,
  gradeInfo: null,
  achievements: [],

  setGradeData: (type, grade, gradeInfo,achievements) => set({ type, grade, gradeInfo, achievements }),
  updateGradeInfo: (updatedGradeInfo: GradeInfo) => set((state) => ({ gradeInfo: { ...state.gradeInfo, ...updatedGradeInfo } as GradeInfo })),
  clearGrade: () => set({ grade: null, type: "", gradeInfo: null, achievements: [] }),
  addAchievemnent: (achievement:Achievement) => set((state) => ({ achievements: [...state.achievements, achievement] })),
  removeAchievement: (achievementId:string) => set((state) => ({ achievements: state.achievements.filter(a => a.id !== achievementId)})),
  renewAchievement: (updatedAchievement:Achievement) => set((state) => ({ achievements: state.achievements.map(a => a.id === updatedAchievement.id ? updatedAchievement : a)})),
}) )