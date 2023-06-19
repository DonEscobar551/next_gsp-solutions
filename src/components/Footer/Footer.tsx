import styles from './Footer.module.css'

export default function Footer({}) {

    return <div className={styles.background_container + ' text--default'}>
        <div className={styles.content_container}>
            <div className={styles.footer_item}></div>
            <a href={'/impressum'} className={styles.footer_item}>Impressum</a>
            <a href={'/policy'} className={styles.footer_item}>Datenschutzerklärung</a>
            <div className={styles.footer_item}></div>
        </div>
    </div>
}
