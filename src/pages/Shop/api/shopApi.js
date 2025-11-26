import {create} from "zustand";

export const useShop = create((get , set) => ({
    products: [],
    error: null,
    loading: false,

    getAllProducts: async () => {
        try {
            set({loading: true, error: null});
            const res = await axios.get("https://fakestoreapi.com/products")
            set({products: res.data, loading: false, error: null});
        } catch (error) {
            console.log(error.status)
        }
    }

}))