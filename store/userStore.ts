import { create } from "zustand";

type userStore = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create<userStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () =>
    set((state) => ({
      ...state,
      hasFinishedOnboarding: !state.hasFinishedOnboarding,
    })),
}));
