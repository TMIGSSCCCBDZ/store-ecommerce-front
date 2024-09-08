import Image from "next/image";
import { Product } from "../../types/types";
import { ResultNotFound } from "./results-not-found";
import { Badge } from "./ui/badge";
import { formatter } from "@/lib/utils";
import { Currency, CurrencyIcon, DollarSign, Trash } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { useCart } from "../../hooks/use-cart-store";
import { useModal } from "../../hooks/use-modal-store";

interface CartListProps {
    products: Product[] | undefined
}

export const CartList = ({products}: CartListProps) => {
    const {items,removeItem} = useCart()
    const {onOpen} = useModal()

    return (
        <div className='flex flex-col space-y-2 items-center'>
            {products?.length === 0 && <ResultNotFound type="cart" />}
            <ScrollArea className="w-full h-32">

          
            {products?.map(product=> (
                 <div key={product?.id} className="flex items-center w-full justify-between px-3 mt-2">
                <div>
                  <Image src={product.images[0].url} alt=''  width={50} height={50} />
                </div>
                <div className="flex ml-2 gap-x-1">

                <Badge variant="outline">{product.size.name}</Badge>
                    <Badge variant="outline">{product.color.name}</Badge>
                    <Badge variant="outline">{formatter.format(Number(product.price))}</Badge>

                    <Button onClick={() => {
                    
                        removeItem(product.id)
                         onOpen("cart",{products: [...items.filter(item => item.id !== product.id)]})
                         
                         }} variant={'destructive'} size="icon" ><Trash className="w-4 h-4" /></Button>
                </div>
            </div>
            ))}
              </ScrollArea>
              {!!products?.length && (  <div className="flex items-center justify-between px-3 gap-x-1">
                <p>Total Price</p>
                <Badge variant="outline"><DollarSign className="w-4 h-4" />  {products?.reduce((total,item)=> {
                    return  total + Number(item.price)
                }, 0)}</Badge>

            </div>)}
          
           
        </div>
    )
}