import { create } from "zustand";
import { persist } from "zustand/middleware"

const initialUser = null;

export const useAuthStore = create(persist((set) => ({
    user: initialUser,
    setUser: ({ id, username }) => set({ user: { id, username } }),
    unsetUser: () => set({ user: initialUser })
}), {
    name: "user"
}))