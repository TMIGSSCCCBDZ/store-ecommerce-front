import { Header } from '@/components/header'
import { Home } from '@/components/home'
import { ProductList } from '@/components/product-list'
import getBillboards from '@/lib/getBillboard'
import getProducts from '@/lib/getProducts'
import React from 'react'

const page = async() => {
  const billboard = await getBillboards("cm0feciu50003f6otoaggci5y")
  const products = await getProducts({isFeatured:true})
  
  return (
    <div>
   
      <Header />
      <Home data={billboard} />
      <div className='flex flex-col w-full px-8 mt-3 gap-y-8 '>
        <ProductList label="Featured Products" products={products} />
      </div>
   
     
    </div>
  )
}

export default page