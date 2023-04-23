import styles from './page.module.css'

export default function Page() {
    return <>
        <div className={styles.image_container}></div>
        <div className={styles.image_glass}></div>
        <div className={styles.page__container}>
            <div className={styles.opener}>
                <div className={styles.opener_headline}>
                    GSP Solutions</div>
                <div className={styles.opener_text + ' text--default'}>
                    Ihr Partner für Datenschutz, Seminare und internationale Geschäftsbeziehungen seit 1986.
                </div>
            </div>
        </div>
    </>
}

