import { getProduct, getAllProductIds } from "../../lib/products";
import { getPictures } from "../../lib/pictures"
import Link from "next/dist/client/link";

export async function getStaticPaths() {
    const prodPaths = await getAllProductIds()
    // console.log(prodPaths)
    return {
        paths: prodPaths,
        fallback: true
    }
}

export async function getStaticProps(data) {
    const productData = await getProduct(data.params.id)
    return {
        props: {
            productData
        }
    }
}

export default function Product({ productData }) {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <p>
                Slideshow
                {/* <Link href={pictureData.url}></Link> */}
                {/* {pictureData.title} */}
                <h1>
                    {productData.title}
                </h1>
                Ceci n'est pas un article.<br />
                {productData.body}
            </p>
        </div>
    )
}