import { getProduct, getAllProductIds } from "../../lib/products";
import { getAllPictureIds, getPicture } from "../../lib/pictures"
import Link from "next/dist/client/link";
import Layout from "../../components/layout";

export async function getStaticPaths() {
    const prodPaths = await getAllProductIds()
    return {
        paths: prodPaths,
        fallback: true
    }
}

export async function getStaticProps(data) {
    const productData = await getProduct(data.params.id)
    const picData = await getPicture(data.params.id)
    return {
        props: {
            productData, picData
        }
    }
}

export default function productPage({ productData, picData }) {
    return (
        <Layout>
            <main>
                <img src={picData.url} />
                <h3>{picData.title}</h3>
                <h1>{productData.title}</h1>
                Ceci n'est pas un article.
                <br /><br />
                {productData.body}
            </main>
        </Layout>
    )
}