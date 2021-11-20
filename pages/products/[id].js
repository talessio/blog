import Image from 'next/image'
import styles from '../../styles/utils.module.css'
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

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("ratingMenu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
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
                <div className={styles.rating}>
                    <div onClick="openTab('rate')">
                        Tell us your opinion<br />
                    </div>
                    <div id="rate" className="ratingMenu">
                        <span onClick="this.parentElement.style.display='none'" className="closebtn">x</span>
                        Rating 1: <StarRating />
                        <br />
                        Rating 2: <StarRating />
                        <br />
                        Rating 3: <StarRating />
                    </div>
                </div>
                <div className={styles.rating}>

                </div>
                <br />
                Ceci n'est pas un article.
                <br />
                {productData.body}
            </main>
        </Layout >
    )
}