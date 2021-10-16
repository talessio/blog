

export async function getProducts() {
    const gatheredProducts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const allProducts = await gatheredProducts.json()
    return allProducts
}

export async function getProduct(id) {
    const product = await getProducts();
    return product.find(elem => elem.id === id)
}

export async function getAllProductIds() {
    const product = await getProducts();
    return product.map(elem => String(elem.id))
}