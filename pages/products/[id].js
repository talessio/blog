import { getProduct, getAllProductIds } from "../../lib/products";
import { getPictures } from "../../lib/pictures"

export async function getStaticPaths() {
    const prodPaths = await getAllProductIds()
    console.log(prodPaths)
    return {
        paths: prodPaths,
        fallback: true
    }
}

export async function getStaticProps(params) {
    const productData = await getProduct(params.id)
    // console.log(productData)
    return {
        props: {
            productData
        }
    }
}

export default function Product({ productData }) {
    return (
        <div>
            <p>
                Slideshow
                {/* <Link href={pictureData.url}></Link> */}
                {/* {pictureData.title} */}
                <h1>
                    {productData.title}
                </h1>
                Ceci n'est pas un article.
                {productData.body}
            </p>
        </div>
    )
}