export async function getProducts() {
    const gatheredProducts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const allProducts = await gatheredProducts.json()
    return allProducts
}

export async function getProduct(id) {
    const products = await getProducts();
    return products.find(elem => Number(elem.id) === Number(id))
}

export async function getAllProductIds() {
    const product = await getProducts();
    return product.map(elem => ({ params: { id: String(elem.id) } }))
}