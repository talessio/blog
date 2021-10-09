import Head from "next/head"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";

const nomeArticolo = "Nome dell'articolo"
export const nomeSito = "Nome del sito"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/* icon? */}
                <meta name="og:title" content={nomeSito} />
            </Head>
            
            <header className={styles.menu}>
                {/* link to home, other places */}
                <Link href="../">
                    <a className={utilStyles.colorInherit}>Home</a>
                </Link>
            </header>
            <h2 className={utilStyles.headingLg}>
                {nomeArticolo}
            </h2>
        </div>
    )
}