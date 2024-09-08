"use client"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Image } from "../../types/types"
import { useEffect, useRef, useState } from "react"
 interface ArrayProps {
    images:Image[]
 }
export const CarouselList = ({images}: ArrayProps) =>{

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const [isMounted, setisMounted] = useState(false)
  useEffect(() => {
    setisMounted(true)
  }, [])
  if (!isMounted) {
      return null
  }
  
 
  return (
   

  
    <Carousel
    
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent >
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className=" border  ">
                <CardContent className="p-0 aspect-square overflow-hidden">
                  <img src={image.url} className="rounded-lg object-cover " />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    

 
      
    </Carousel>
   
  )
}