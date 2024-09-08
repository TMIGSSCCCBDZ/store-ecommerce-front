"use client"
import { Button } from "@/components/ui/button";
import { Color, Size } from "../../../../../../../types/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from 'query-string'
import { cn } from "@/lib/utils";
interface FilterProps {
    data: (Color | Size)[],
    name: string,
    valueKey: string
}

export const Filter = ({data, name, valueKey}: FilterProps) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const existingSearchPrams = searchParams.get(valueKey)
    const onClick = (id: string) => {
        const current =  qs.parse(searchParams.toString())
        const query={
            ...current,
            [valueKey]: id
        }
          if (current[valueKey] === id) {
            query[valueKey] = null
        }
        const url  = qs.stringifyUrl({
            url: window.location.href,
            query
        },{skipNull: true})
      

        router.push(url)

    }



        return (
            <div className="flex flex-col items-center m-2 sm:items-start sm:justify-start justify-center space-y-1">
                <p >{name}</p>
                <div className="flex  gap-x-2">
 {data.map(data=> (
                    <Button key={data.id} className={cn("",existingSearchPrams === data.id ? "" : "bg-zinc-800 text-white")} onClick={() => onClick(data.id)} key={data.id}>
                        {data.name}
                        
                    </Button>
                ))}
                </div>
               
            </div>
        )
}