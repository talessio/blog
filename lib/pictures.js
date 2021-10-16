export async function getPictures(){
    const gatheredPictures = await fetch('https://jsonplaceholder.typicode.com/photos')
    const allPictures = await gatheredPictures.json()
    return allPictures
}