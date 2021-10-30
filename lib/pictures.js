export async function getPictures(){
    const gatheredPictures = await fetch('https://jsonplaceholder.typicode.com/photos')
    const allPictures = await gatheredPictures.json()
    return allPictures
}

export async function getPicture(id) {
    const pictures = await getPictures();
    return pictures.find(elem => Number(elem.id) === Number(id))
}

export async function getAllPictureIds() {
    const pic = await getPictures();
    return pic.map(elem => ({ params: { id: String(elem.id) } }))
}

export async function getAllPictureAlbumIds(){
    const alb = await getPictures();
    return alb.map(elem => ({params: {}}))
}