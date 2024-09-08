import {create} from 'zustand'
import { Product } from "../types/types"

export type ModalType = "showProduct" | "cart"

interface ModalData  {
    product?: Product
    products?: Product[]
}
interface ModalStore {
    type: ModalType | null,
    isOpen: boolean,
    data:ModalData,
    onOpen: (type: ModalType, data?:ModalData) => void,
    onClose: () => void
}

export const useModal = create<ModalStore>(set => ({
    type: null,
    isOpen:false,
    data:{},
    onOpen: (type, data={}) => set({isOpen: true, data, type}),
    onClose: () => set({isOpen:false, type:null})
}))