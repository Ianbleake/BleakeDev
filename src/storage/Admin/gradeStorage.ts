import { create } from "zustand";

type GradeState = {
  grade: Grade | null;
  type: string;
  gradeInfo: GradeInfo | null;
  achievements: Achievement[];

  setGradeData: ( type: string, grade: Grade | null, gradeInfo: GradeInfo, achievements:Achievement[] ) => void;
  setGrade: ( grade: Grade | null ) => void;
  setType: ( type: string ) => void;
  updateGrade: ( grade: Partial<Grade> ) => void;
  clearGrade: () => void;
  addAchievemnent: ( achievement: Achievement ) => void;
}

export const useGradeStorage = create<GradeState>(( set ) => ({

  grade: null,
  type: "",
  gradeInfo: null,
  achievements: [],

  setGradeData: (type, grade, gradeInfo,achievements) => set({ type, grade, gradeInfo, achievements }),
  setGrade: (grade) => set({ grade }),
  setType: (type) => set({ type }),
  updateGrade: (grade) => set((state) => ({ grade: { ...state.grade, ...grade } as Grade })),
  clearGrade: () => set({ grade: null, type: "" }),
  addAchievemnent: (achievement:Achievement) => set((state) => ({ achievements: [...state.achievements, achievement] })),
  
}) )