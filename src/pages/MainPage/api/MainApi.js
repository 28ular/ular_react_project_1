import {create} from "zustand";
import axios from "axios";

export const useMain = create((set , get ) =>  ({
    users: [],
    error: null,
    loading: false,
    getUsers: async () => {
        try{
            set({loading: true, error: null});
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            set({users: res.data , loading: false, error: null});
        } catch (error) {
            console.log(error);
        }
    }
}))