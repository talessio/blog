import Head from "next/head"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";

export const nomeSito = "Nome del sito"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={nomeSito} />
            </Head>
            <header>
                {home ? (
                    <>
                        <h1>This is the home.</h1>
                    </>
                ) : (
                    <h1>This is not the home.</h1>
                )}
                {!home && (
                    <div className={styles.menu}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                )}
            </header>
            <main>{children}</main>
        </div>
    )
}