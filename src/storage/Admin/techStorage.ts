import { create } from "zustand";

type TechState = {
  techs: Technology[] | null;
  setTechs: (techs: Technology[] | null) => void;
  addTech: (tech: Technology) => void;
  removeTech: (id: string) => void;
  updateTech: (updatedData: Technology) => void;
  clearTechs: () => void;
}

export const useTechStorage = create<TechState>((set) => ({
    
    techs: null,
  
    setTechs: (techs) => set({ techs }),
  
    addTech: (tech) =>
      set((state) => ({
        techs: state.techs ? [...state.techs, tech] : [tech],
      })),
  
    removeTech: (id) =>
      set((state) => ({
        techs: state.techs
          ? state.techs.filter((t) => t.id !== id)
          : null,
      })),
  
    updateTech: (updatedData) =>
      set((state) => ({
        techs: state.techs
          ? state.techs.map((t) =>
              t.id === updatedData.id ? { ...t, ...updatedData } : t
            )
          : null,
      })),
  
    clearTechs: () => set({ techs: null }),
  }));