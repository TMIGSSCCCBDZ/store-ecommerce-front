"use client"
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "../../types/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
    image: ImageType
}

export const GalleryTab = ({image}: GalleryTabProps) => {

    return (
        <Tab className={'relative mt-2 flex items-center justify-center aspect-square bg-white'}>
            {({selected})=> (
                <div>
                    <span className="absolute inset-0 w-full h-full aspect-square overflow-hidden">
                    <Image src={image.url} alt='' fill ={true} objectFit={'cover'} />

                </span>  
                <span className={cn("absolute inset-0 w-full h-full ring-2 ring-offset-2 rounded-lg",selected ? "ring-zinc-400" : "ring-transparent")}></span>
                </div>
              
            )}

        </Tab>
    )
}
