import {create} from "zustand";

export const useAboutf = create((set , get ) => ({

    user: {name:'ular' , age: "14"},
    setName: (name) => set((state) => ({user: {...state.user , name}}))


}))