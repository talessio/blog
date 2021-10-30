import { getProduct, getAllProductIds } from "../../lib/products";
import { getAllPictureIds, getPicture } from "../../lib/pictures";
import Link from "next/dist/client/link";
import Layout from "../../components/layout";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick.slick-theme.css";

export default class Slider extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidersToScroll: 1
        };
        return(
            <div>
                <h2>Slidey McSlideFace</h2>
                <Slider {...settings}>
                    
                </Slider>
            </div>
        )
    }
}

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