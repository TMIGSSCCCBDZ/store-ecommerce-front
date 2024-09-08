const URL = `${process.env.NEXT_PUBLIC_SITE_URL}/billboards`


const getBillboards = async(id: string) => {

    const res = await fetch(`${URL}/${id}`)
    return res.json()
}

export default getBillboards