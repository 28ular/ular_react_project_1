import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useAvatar = create(
    persist((set , get) => ({

        Name: {
            name: 'пусто'
        },
        Age: {
            age: 'пусто'
        },
        Telegram: {
            telegram: 'пусто'
        },

        setUser: (setName , setAge , setTelegram) => set((s) => ({
            Name: {...s.Name , name: setName},
            Age: {...s.Age, age: setAge},
            Telegram: {...s.Telegram , telegram: setTelegram}
        })),

        custom: 'edit_form_notactive',
        toggleForm: () => set((s) => ({custom: s.custom === 'edit_form_notactive' ? 'edit_form_active' : 'edit_form_notactive'})),

        AvatarUrl: {
            url: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        },
        changeAvatarurl: (setUrl) => set((s) => ({
            AvatarUrl: {...s.AvatarUrl , url: setUrl}
        })),

        avatarClass: 'editAvatar_form_notActive',
        toggleAvatarForm: () => set((s) => ({avatarClass: s.avatarClass === 'editAvatar_form_notActive' ? 'editAvatar_form_active' : 'editAvatar_form_notActive' })),



    }) , {name: 'app-user-avatar'})
)