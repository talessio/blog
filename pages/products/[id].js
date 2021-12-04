import Image from 'next/image'
import styles from '../../styles/utils.module.css'
import { getProduct, getAllProductIds } from "../../lib/products";
import { getAllPictureIds } from "../../lib/pictures";
import { getAlbum, getAllAlbumIds } from "../../lib/albums"
import Layout from "../../components/layout";
import Slider from "../../components/photoSlider"
import StarRating from "../../components/stars";
import React from 'react';

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

function TotalRateCount(rating) {
    var totalRate = 0
    totalRate += rating
    console.log(totalRate)
    return (totalRate)
}

function computeAvg (rating1, rating2, rating3) {
    var finalAvg = (rating1+rating2+rating3)/3
    return (finalAvg)
}

export default function productPage({ productData, albData }) {
    const [satisfaction, setSatisfaction] = React.useState(0)
    const [quality, setQuality] = React.useState(0)
    const [price, setPrice] = React.useState(0)
    var finalAvg = computeAvg(satisfaction, quality, price)
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
                <div className={styles.rating}>
                    {/* create finalAvg that computes avg for totalratecount */}
                    <StarRating value={finalAvg}/>
                    <br />
                    <br />
                    Tell us your opinion
                    <br />
                    <br />
                    Satisfaction:
                    <br/>
                    <StarRating value={satisfaction} onStarClick={(value) => (setSatisfaction(value), TotalRateCount(value))} />
                    <br />
                    Quality: 
                    <br/>
                    <StarRating value={quality} onStarClick={(value) => (setQuality(value), TotalRateCount(value))}/>
                    <br />
                    Price: 
                    <br/>
                    <StarRating value={price} onStarClick={(value) => (setPrice(value), TotalRateCount(value))} />
                </div>
                <br />
                Ceci n'est pas un article.
                <br />
                {productData.body}
            </main>
        </Layout >
    )
}