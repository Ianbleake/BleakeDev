import { create } from "zustand";

type DetailExperienceState = {
    detailInfo: Experience | null;
    
    setDetailInfo: (experience: Experience | null ) => void;
}

export const useDetailExperienceStorage = create<DetailExperienceState>((set) => ({
    detailInfo: null,

    setDetailInfo: (experience) => set({ detailInfo: experience }),
}))