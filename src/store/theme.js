import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useTheme = create(
    persist((set , get) => ({
        theme: 'black',
        toggle: () => set((s) => ({theme: s.theme === 'black' ? 'white' : 'black'})),
    }))
)