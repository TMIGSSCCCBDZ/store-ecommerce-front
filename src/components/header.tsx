import getCategories from "@/lib/getCatogories"
import { HeaderMenuNavProps } from "./header-menu-nav"
import { ModeToggle } from "./mode-toggle"
import { HeaderAction } from "./header-action"

export const Header = async() => {
    const categories = await getCategories()

    return (
        <div className="w-full  shadow-md px-4 py-4 flex items-center justify-between">
            <div className='flex items-center gap-x-1'>
                      <p className="text-lg font-bold mr-2">Store</p>
            <HeaderMenuNavProps data={categories} />
            </div>
      
            <div className="flex gap-x-3">
                <HeaderAction />
                <ModeToggle />
            </div>
        </div>
    )
}