import Image from "next/image"
import { Billboard } from "../../types/types"

interface HomeProps {
    data: Billboard
}
export const Home = ({data}: HomeProps) => {
    
    return (
        <div className="w-full px-6 mt-3 overflow-hidden">
           <div   className={`w-full  relative   rounded-md overflow-hidden flex items-center border  `}>
<img src={data?.imageUrl}  className="object-cover dark:brightness-90"  alt="" />
<h1 className="absolute top-5 left-8 text-xl  font-semibold md:left-16 md:top-10 md:text-3xl">{data?.label}</h1>

           </div>
        </div>
    )
}