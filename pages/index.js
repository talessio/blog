import Head from 'next/head'
import Link from 'next/link'
import Layout, { nomeSito } from "../components/layout";
import { getProducts } from '../lib/products';
import { getPictures } from '../lib/pictures';
import utilStyles from '../styles/utils.module.css'

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
    // <Layout>
    <div>
      <title>{nomeSito}</title>
      <h1>Template per gli articoli in vendita</h1>
      <p>
        <h2>Tutti gli articoli:</h2>
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
      </p>
    </div>
    // </Layout>
  )
}
