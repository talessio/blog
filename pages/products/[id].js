import { getProduct, getAllProductIds } from "../../lib/products";
import { getPicture, getAllPictureIds } from "../../lib/pictures";
import { getAlbum, getAllAlbumIds } from "../../lib/albums"
import Layout from "../../components/layout";
import Slider from "../../components/photoSlider"
import Image from 'next/image'

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
    // const picData = await getPicture(data.params.id)
    const albData = await getAlbum(data.params.id)
    return {
        props: {
            productData
            // , picData
            , albData
        }
    }
}

export default function productPage({ productData, picData, albData }) {
    // console.log(albData)
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
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
                Ceci n'est pas un article.
                <br /><br />
                {productData.body}
            </main>
        </Layout>
    )
}