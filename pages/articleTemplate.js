// import Head from "next/head";
import Layout, { nomeSito } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/dist/client/link";

export default function articleTemplate() {
    return (
            <div>
                <title>{nomeSito}</title>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <main>
                <p>
                    Ceci n'est pas un article.
                </p>
                </main>
            </div>
    )
}