const URL = `${process.env.NEXT_PUBLIC_SITE_URL}/sizes`

const getSizes = async() => {
    const res = await fetch(URL)
    return res.json()


}

export default getSizes