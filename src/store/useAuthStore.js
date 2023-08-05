import { create } from "zustand";
import { persist } from "zustand/middleware"

const initialUser = null;

export const useAuthStore = create(persist((set) => ({
    user: initialUser,
    setUser: ({ password, ...userData }) => set({ user: userData }),
    unsetUser: () => set({ user: initialUser })
}), {
    name: "user"
}))