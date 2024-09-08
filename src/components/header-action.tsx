"use client"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../../hooks/use-cart-store"
import { useModal } from "../../hooks/use-modal-store"

export const HeaderAction = () => {
const {items} = useCart()
const {onOpen} = useModal()
    return (
        

   
        <button onClick={() => onOpen("cart", {products: items}) } className="dark:bg-zinc-800 bg-zinc-300 hover:bg-zinc-200 hover:dark:bg-zinc-900 transition ease-in-out rounded-md px-3 py-2 flex items-center gap-x-2 ">
            <ShoppingCart className="w-5 h-5" />
            <span>{items?.length}</span>
        </button>
        
    )
}