import { Image as ImageType } from "../../types/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { GalleryTab } from "./gallery-tab";
import Image from "next/image";

interface GalleryProps {
    images: ImageType[] | undefined
}

export const Gallery = ({images}: GalleryProps) => {

    return (
        <TabGroup as={'div'} className="flex flex-col  w-full h-full ">
      
            <TabPanels className={'aspect-square'}>
                {images?.map(image => (
                    <TabPanel>
                        <div  className={'relative aspect-square w-full h-full '}>
                            <Image fill src={image.url} alt="" />
                        </div>
                          
                    </TabPanel>
                ))}

            </TabPanels>
            <div className="w-full sm:block hidden">
                <TabList className={'grid grid-cols-4  gap-2 '}>
                  {images?.map(image => (
                  <GalleryTab key={image?.url} image={image} />

                  ))}
            </TabList>
            </div>
            
        </TabGroup>
    )
}