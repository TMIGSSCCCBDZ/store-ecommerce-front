import { Header } from '@/components/header'
import getProduct from '@/lib/getProduct'
import getProducts from '@/lib/getProducts'
import React from 'react'
import { Image, Product } from '../../../../../../../../types/types'
import { ProductList } from '@/components/product-list'
import { Gallery } from '@/components/gallery'
import { Info } from './_components/info'

interface pageProps {
    params:{storeId:string, productId:string}
}
const page = async({params}: pageProps) => {
    const produdctId = params.productId
    const product   =await getProduct(produdctId) as Product
    const suggestedProducts =  await getProducts({
        categoryId: product?.category.id
    }) 
   
   const newSuggestedProducts = suggestedProducts.filter((suggestedProduct:Product) => suggestedProduct.id !== product.id)

   return (
    <div>
        <Header />
        <div className='grid grid-cols-1 lg:grid-cols-2 p-4'>
            <div >
<Gallery images={product.images} />
            </div>
            <div>
<Info product={product} />
            </div>
        </div>

        <div className='flex flex-col space-y-4'>  <ProductList label='Related products' products={newSuggestedProducts} /></div>
      
        
    </div>
  )
}

export default page