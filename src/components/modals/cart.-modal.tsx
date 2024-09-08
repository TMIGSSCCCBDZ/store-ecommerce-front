import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useModal } from "../../../hooks/use-modal-store"
import axios from 'axios'
  import { Gallery } from "../gallery"
  import { Info } from "@/app/(main)/(routes)/stores/[storeId]/products/[productId]/_components/info"
import { ProductList } from "../product-list"
import { CartList } from "../cart-list"
import { Button } from "../ui/button"
import { useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import { useCart } from "../../../hooks/use-cart-store"
import { headers } from "next/headers"
  
  export const CartModal = () => {
      const {isOpen, type, data, onClose} = useModal()
      const modalOpened = isOpen && type === "cart"
      const {removeAllItems} = useCart()
      const searchParams = useSearchParams()
    const {products} = data
    useEffect(() => {
      if (searchParams.get("success")) {
        toast({
          title: "Payment successfully done"
        })
        removeAllItems()

      }
      if (searchParams.get("cancel")) {
        toast({
          title: "Payment Canceled"
        })
       

      }
    }, [searchParams, removeAllItems]);
    const checkOut = async() => {
      try {
        
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,{
          productIds: products?.map(product=> product.id)
        })
        window.location = response.data.url
      } catch (error) {
        return null
      }
    }
  
      return (
          <Dialog open={modalOpened} onOpenChange={onClose}>
       
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cart</DialogTitle>
          </DialogHeader>
        <CartList  products={products} />

        
          <DialogFooter className="gap-y-2 items-center">
            <Button onClick={onClose} variant="outline" type="button">Close</Button>
            {!!products?.length && (          <Button variant={'default'} onClick={checkOut}  type="button">Proceed to checkout</Button>
)}

            
          </DialogFooter>
        </DialogContent>
      </Dialog>
      )
  }