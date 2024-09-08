"use client"
import { usePathname } from "next/navigation"
import { Category } from "../../types/types"
import Link from "next/link"
import { cn } from "@/lib/utils"


interface HeaderMenuNavProps {
    data: Category[]
}

export const HeaderMenuNavProps = ({data}: HeaderMenuNavProps) => {
    const pathname = usePathname()


    const routes = data.map((route) => ({
        label: route.name,
        href: `/category/${route.id}`,
        active: pathname === `/category/${route.id}`
    }))

    

    return (
        <div className="flex items-center gap-x-2 ml-2">
            {routes.map(route => (
                <Link key={route.href} href={route.href} className={cn("",route.active ? "dark:text-white text-zinc-950" : "dark:text-zinc-400 dark:hover:text-zinc-200 text-zinc-700 hover:text-zinc-800 ")}>
                    {route.label}
                </Link>
            ))}

        </div>
    )
}