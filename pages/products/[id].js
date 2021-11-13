import Image from 'next/image'
import { getProduct, getAllProductIds } from "../../lib/products";
import { getAllPictureIds } from "../../lib/pictures";
import { getAlbum, getAllAlbumIds } from "../../lib/albums"
import Layout from "../../components/layout";
import Slider from "../../components/photoSlider"
import StarRating from "../../components/stars";

export async function getStaticPaths() {
    const prodPaths = await getAllProductIds()
    const picPaths = await getAllPictureIds()
    const albPaths = await getAllAlbumIds()
    return {
        paths: (prodPaths, picPaths, albPaths),
        fallback: true
    }
}

export async function getStaticProps(data) {
    const productData = await getProduct(data.params.id)
    const albData = await getAlbum(data.params.id)
    return {
        props: {
            productData
            , albData
        }
    }
}

export default function productPage({ productData, albData }) {
    return (
        <Layout>
            <main>
                <h1>{productData.title}</h1>
                <Slider>
                    {
                        albData.map(elem => {
                            return (
                                <div key={elem.id}>
                                    <Image
                                        src={elem.url}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
                <br />
                <StarRating />
                <br />
                Ceci n'est pas un article.
                <br />
                {productData.body}
            </main>
        </Layout >
    )
}