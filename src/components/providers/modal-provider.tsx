"use client"
import { useEffect, useState } from "react";
import { ShowProductModal } from "../modals/show-product-modal";
import { CartModal } from "../modals/cart.-modal";

export const ModalProvider = () =>{
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
       setIsMounted(true)
    
    }, []);
    if (!isMounted) {
        return null
    }

    return (
        <>
        <ShowProductModal />
        <CartModal />
        </>
    )
}