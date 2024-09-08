 "use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product as ProductType } from "../../types/types"
import { Expand, ShoppingBasket, ShoppingCart } from "lucide-react"
import { CarouselList } from "./carousel-list"
import { formatter } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { ModalType, useModal } from "../../hooks/use-modal-store"
import { useCart } from "../../hooks/use-cart-store"
interface ProductProps {
product: ProductType
}
export const Product = ({product}: ProductProps) => {
    const router = useRouter()
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}`
    const storeId = url.split('/').pop()
const {addItem} = useCart()
    const onClick = () => {
router.push(`/stores/${storeId}/products/${product.id}`)
    }
    const {onOpen} = useModal()
const addToCart = (e: any) => {
  e.stopPropagation()
  addItem(product)

}
    const onAction = (e:any, action: ModalType) => {
      e.stopPropagation()
       onOpen(action, {product})
    }
    return(
        <Card onClick={onClick} className="hover:cursor-pointer group relative w-[350px] shadow-none drop-shadow-none  ">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="w-full ">
<CarouselList images={product.images} /> 
  
      </CardContent>
      <CardFooter className="flex items-start  gap-x-2">
      <div style={{backgroundColor: product.color.value}} className='w-5 h-5 rounded-full'></div>

      <CardDescription>{formatter.format(Number(product.price))}</CardDescription>
      <CardDescription>{product.category.name}</CardDescription>


      </CardFooter>
      <CardFooter className="flex justify-between">

        <Button onClick={(e) => addToCart(e)} variant="outline" className="gap-x-2"><ShoppingCart className="w-5 h-5" /> Add to cart</Button>
        <Button onClick={(e)=> onAction(e, "showProduct")}>Explore!</Button>
      </CardFooter>
    </Card>
    )
}