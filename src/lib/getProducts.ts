import qs from 'query-string'
const URL = `${process.env.NEXT_PUBLIC_SITE_URL}/products`
interface Query {
    categoryId?:string,
    colorId?: string,
    sizeId?: string,
    isFeatured?: boolean
}

const getProducts = async({categoryId, colorId, sizeId, isFeatured}: Query) => {
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            categoryId,
            sizeId,
            isFeatured,
            colorId

        }
    })

    const res = await fetch(url)
    return res.json()
}

export default getProducts