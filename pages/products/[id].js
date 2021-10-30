import { getProduct, getAllProductIds } from "../../lib/products";
import { getPicture } from "../../lib/pictures";
import Layout from "../../components/layout";
import Slider from "../../components/photoSlider"

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
            productData
            , picData
        }
    }
}

export default function productPage({ productData, picData }) {
    return (
        <Layout>
            <main>
                <h1>{productData.title}</h1>
                <Slider>
                    {
                        urls.map(url => {
                            return (
                                <div key={url}>
                                    {url}
                                </div>
                            )
                        }
                        )
                    }
                </Slider>
                Ceci n'est pas un article.
                <br /><br />
                {productData.body}
            </main>
        </Layout>
    )
}