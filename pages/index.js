import Head from 'next/head'
import Link from 'next/link'
import Layout, { nomeSito } from "../components/layout";
import { getProducts } from '../lib/products';
import { getPictures } from '../lib/pictures';
import Image from 'next/image'

export async function getStaticProps() {
  const products = await getProducts()
  const pictures = await getPictures()
  return {
    props: {
      products
      , pictures
    }
  }
}

export default function Home({ products, pictures }) {
  return (
    <Layout home>
      <div>
        <Head>
          <title>{nomeSito}</title>
        </Head>
        <main>
          <p>
            <h2>Tutti gli articoli:</h2>
            <div>
              <div>
                //add pics next to each article
                {/* {pictures.map((pictures) => (
                  <>
                    <Image
                      src={"https://via.placeholder.com/150/92c952"}
                      width={10}
                      height={10}
                    />
                  </>
                ))} */}
              </div>
              <div>
                {products.map((product) => (
                  <>
                    <h3>
                      <Link href={`/products/${product.id}`}>
                        <a>{product.title}</a>
                      </Link>
                    </h3>
                    {product.body}
                  </>
                ))}
              </div>
            </div>
          </p>
        </main>
      </div>
    </Layout>
  )
}
