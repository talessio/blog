import Head from "next/head";
import Layout, { nomeSito } from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function articleTemplate() {
    return (
        <Layout children>
            <Head>
                <title>
                    {nomeSito}
                </title>
            </Head>
            <section className={"slideshow"}>
                qui vanno le foto
            </section>
            <section className={"nomeArticolo"}>
                <h2>
                    Nome articolo
                </h2>
            </section>
            <section className={"descrizione"}>
                <p>
                    Ceci n'est pas un article.
                </p>
            </section>
        </Layout>
    )
}