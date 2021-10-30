export async function getAlbums() {
    const gatheredAlbums = await fetch('https://jsonplaceholder.typicode.com/albums')
    const allAlbums = await gatheredAlbums.json()
    return allAlbums
}

export async function getAlbum(id) {
    const albumsId = await getAlbums();
    return albumsId.find(elem => Number(elem.id) === Number(id))
}

export async function getAllAlbumIds() {
    const alb = await getAlbums();
    return alb.map(elem => ({ params: { id: String(elem.id) } }))
}