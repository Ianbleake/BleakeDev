import { create } from "zustand";

type Grade = Certification | Degree;

type GradeState = {
  grade: Grade | null;
  type: string;

  setGrade: ( grade: Grade | null ) => void;
  setType: ( type: string ) => void;
  updateGrade: ( grade: Partial<Grade> ) => void;
  clearGrade: () => void;
}

export const useGradeStorage = create<GradeState>(( set ) => ({

  grade: null,
  type: "",

  setGrade: (grade) => set({ grade }),
  setType: (type) => set({ type }),
  updateGrade: (grade) => set((state) => ({ grade: { ...state.grade, ...grade } as Grade })),
  clearGrade: () => set({ grade: null, type: "" }),
  
}) )