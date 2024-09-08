
import { create } from "zustand";
import { Product } from "../types/types";
import {persist, createJSONStorage} from 'zustand/middleware'
import { toast } from "@/hooks/use-toast";
interface CartStore {
    items: Product[],
    addItem:(data: Product) => void,
    removeItem: (id: string) => void,
    removeAllItems: () => void,
}

export const useCart = create(
    persist<CartStore>((set, get) => ({
        items:[],
        addItem: (data) => {
            const currentItems = get().items
            const existintItem = currentItems.find(item => item.id === data.id)
            if (existintItem) {
                return toast({
                    title:"Already in the cart"
                })
            }
            set({items: [...currentItems, data]})
            toast({
                title:"Added to the cart"
            })
        },
        removeItem: (id) => {
            const currentItems = get().items

            set({items:[...currentItems.filter(item => item.id !== id)]})
            toast({
                title:"Removed from the cart"
            })
        } ,
        removeAllItems: () => {
            set({items: []})
        }

    }),{
        name:"cart-storage",
        storage: createJSONStorage(()=> localStorage)
    })
)