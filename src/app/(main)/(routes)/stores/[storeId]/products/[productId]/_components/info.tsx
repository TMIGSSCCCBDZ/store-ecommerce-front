import { Button } from "@/components/ui/button";
import { Product } from "../../../../../../../../../types/types";
import { Separator } from "@/components/ui/separator"
import { ShoppingCart } from "lucide-react";
import { formatter } from "@/lib/utils";

interface InfoProps {
    product: Product | undefined
}

export const Info = ({product}: InfoProps) => {

    return (
        <div className="flex flex-col flex-1 space-y-3 mb-16 mt-10   md:my-8">
            <h1 className="text-2xl  font-bold mb-4">{product?.name}</h1>
        
            <div className="flex flex-col items-center w-full space-y-3">
            <p className="w-full flex items-center font-semibold justify-between px-2 ">Price <span className="font-thin">{formatter.format(Number(product?.price))}</span></p>
            <Separator  />
              
                <p className="w-full flex items-center font-semibold justify-between px-2 ">Category <span className="font-thin">{product?.category.name}</span></p>
               <Separator  />
                <p className="w-full flex items-center font-semibold justify-between px-2 ">Size <span className="font-thin">{product?.size.name}</span></p>
                <Separator  />

                <p className="w-full flex items-center font-semibold justify-between px-2  ">Color <span style={{backgroundColor:product?.color.value}} className="w-5 h-5 md:w-8 md:h-8 rounded-full"></span></p>
                <Button variant={'default'} className="w-full sm:w-32  sm:self-start md:w-32 font-semibold flex items-center !mt-6  ">
                    <ShoppingCart  />
                    Add to cart</Button>
                
            </div>
        </div>
    )
}