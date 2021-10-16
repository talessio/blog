export async function getProducts() {
    const gatheredProducts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const allProducts = await gatheredProducts.json()
    return allProducts
}