import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import React from 'react'
import Footer from '@/components/Footer/Footer'
import styles from './layout.module.css'
import Layout from '@/components/Layout/Layout'

export const metadata = {
    title: 'GSP Solutions',
    robots: 'index, follow'
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className={'page__background'}>
        <Layout>
            <Navigation></Navigation>
            <div className={styles.page_container}>
                {children}
            </div>
            <Footer></Footer>
        </Layout>
        </body>
        </html>
    )
}
