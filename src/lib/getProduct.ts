
const URL = `${process.env.NEXT_PUBLIC_SITE_URL}/products`

const getProduct = async(id: string) => {

    const res = await fetch(`${URL}/${id}`)
    return res.json()
}

export default getProduct