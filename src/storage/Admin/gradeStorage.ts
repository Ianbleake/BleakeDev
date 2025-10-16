import { create } from "zustand";



type GradeState = {
  grade: Grade | null;
  type: string;

  setGradeData: ( type: string, grade: Grade | null ) => void;
  setGrade: ( grade: Grade | null ) => void;
  setType: ( type: string ) => void;
  updateGrade: ( grade: Partial<Grade> ) => void;
  clearGrade: () => void;
}

export const useGradeStorage = create<GradeState>(( set ) => ({

  grade: null,
  type: "",

  setGradeData: (type, grade) => set({ type, grade }),
  setGrade: (grade) => set({ grade }),
  setType: (type) => set({ type }),
  updateGrade: (grade) => set((state) => ({ grade: { ...state.grade, ...grade } as Grade })),
  clearGrade: () => set({ grade: null, type: "" }),
  
}) )