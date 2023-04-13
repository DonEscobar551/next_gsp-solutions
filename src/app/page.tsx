import styles from './page.module.css'

export default function Page() {

    return <>
        <div className={styles.image_container}></div>
        <div className={styles.image_glass}></div>
        <div className={styles.page__container}>
            <div className={styles.hero_container +' text--headline-main'}>
                GSP Solution UG
            </div>
            <div className={styles.secondary}>
            <div style={{backgroundColor:'var(--primary-color)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--secondary-color)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--tertiary-color)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--light-gray)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--dark-gray)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--black)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--white)',width:'100%', height:'100px'}}></div>
            <div style={{backgroundColor:'var(--berry)',width:'100%', height:'100px'}}></div>
            </div>
        </div>
    </>
}

