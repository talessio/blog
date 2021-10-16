import Head from "next/head"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";

export const nomeSito = "Nome del sito"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <meta name="og:title" content={nomeSito} />
            <header className={styles.menu}>
                <Link href="../">
                    <a className={utilStyles.colorInherit}>Home</a>
                </Link>
            </header>
            <main>{children, home}</main>
        </div>
    )
}