import { Product } from "../../types/types"
import { ResultNotFound } from "./results-not-found"

interface ProductListProps {
    label: string
    products: Product[] | undefined

}
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Product as ProductItem } from "./product"
export const ProductList = ({label,products}: ProductListProps) => {

    return (
        <div className="px-6 space-y-4">
           
               <h1 className="font-semibold">{label}</h1>
         {products?.length === 0 && (<ResultNotFound />)}
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {products?.map(product => (
                <ProductItem key={product.id} product={product} />

            ))}
        </div> 
   
        
        </div>
      
    )
}