import { Header } from '@/components/header'
import { Home } from '@/components/home'
import getCategory from '@/lib/getCategory'
import React from 'react'
import { Category } from '../../../../../../types/types'
import getSizes from '@/lib/getSizes'
import getColors from '@/lib/getColors'
import { Filter } from './_components/filter'
import getProducts from '@/lib/getProducts'
import { ProductList } from '@/components/product-list'
interface pageProps {
    params: {categoryId: string},
    searchParams: {sizeId: string, colorId:string}
}
export const revalidate = 0
const page = async({params, searchParams}: pageProps) => {
    
    const categoryId = params.categoryId
    const category =  await getCategory(categoryId)
    const sizes = await getSizes()
    const colors = await getColors()
    const colorId =  searchParams.colorId
    const sizeId =  searchParams.sizeId

    const products = await getProducts({categoryId, colorId, sizeId})
    
  return (
    <div>
        <Header />
        <Home data={category?.billboard} />
        <div className='flex-col flex lg:flex-row '>
            <div className='flex flex-col items-center sm:items-start m-6'>
                <Filter valueKey='sizeId' name="Sizes"  data={sizes} />
                <Filter valueKey='colorId' name="Colors"  data={colors} />

            </div>
            <div className='w-full flex items-center flex-1'>
                <ProductList label="Your taste" products={products} />

            </div>
        </div>

    </div>
  )
}

export default page