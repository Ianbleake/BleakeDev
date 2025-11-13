import { create } from "zustand";

type CategoriesState = {
  categories: Category[] | null;
  setCategories: (categories: Category[] | null) => void;
  addCategory: (category: Category) => void;
  removeCategory: (id: string) => void;
  updateCategory: (updatedDate: Category) => void;
  clearCategories: () => void;
};

export const useCategoriesStorage = create<CategoriesState>((set) => ({
  
  categories: null,

  setCategories: (categories) => set({ categories }),

  addCategory: (category) =>
    set((state) => ({
      categories: state.categories ? [...state.categories, category] : [category],
    })),

  removeCategory: (id) =>
    set((state) => ({
      categories: state.categories
        ? state.categories.filter((cat) => cat.id !== id)
        : null,
    })),

  updateCategory: (updatedData) =>
    set((state) => ({
      categories: state.categories
        ? state.categories.map((cat) =>
            cat.id === updatedData.id ? { ...cat, ...updatedData } : cat
          )
        : null,
    })),

  clearCategories: () => set({ categories: null }),
}));