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
import { Button } from "@headlessui/react"
import { Gallery } from "../gallery"
import { Info } from "@/app/(main)/(routes)/stores/[storeId]/products/[productId]/_components/info"

export const ShowProductModal = () => {
    const {isOpen, type, data, onClose} = useModal()
    const modalOpened = isOpen && type === "showProduct"
    const {product} = data

    return (
        <Dialog open={modalOpened} onOpenChange={onClose}>
     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Product</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2">
            <div>
                <Gallery images={product?.images} />
            </div>
            <div>
                <Info product={product} />
            </div>
            

        </div>
      
        <DialogFooter>
          <Button onClick={onClose} type="button">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}