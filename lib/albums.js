export async function getAlbums() {
    const gatheredPictures = await fetch('https://jsonplaceholder.typicode.com/photos')
    const allPictures = await gatheredPictures.json()
    return allPictures
}

export async function getAlbum(albumId) {
    const albums = await getAlbums();
    return albums.find(elem => Number(elem.albumId) === Number(albumId))
}

export async function getAllAlbumIds() {
    const alb = await getAlbums();
    return alb.map(elem => ({ params: { id: String(elem.albumId) } }))
}