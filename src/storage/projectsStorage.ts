import { categories } from "@/content/categories";
import { create } from "zustand";

type Store = {
  projects: Project[];
  categories: string[];
  selectedCategory: string;
  setProjects: (projects: Project[]) => void;
  setSelectedCategory: (category: string) => void;
};

export const useProjectsStorage = create<Store>((set) => ({
  projects: [],
  categories,
  selectedCategory: "All",
  setProjects: (projects) => set({ projects }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
