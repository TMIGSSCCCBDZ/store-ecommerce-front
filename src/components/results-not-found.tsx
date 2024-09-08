interface CartProps {
    type?:string 
}
export const ResultNotFound = ({type}: CartProps) => {

    return (
        <div className="w-full flex items-center py-3  text-center">
            <p className="mx-auto dark:text-zinc-500  text-zinc-300">{type === 'cart' ? "Your cart is empty, let's go and fill it": "oops! no result found"}</p>
        </div>
    )
}