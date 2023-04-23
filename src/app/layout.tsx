import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import React from 'react'

export const metadata = {
    title: 'GSP Solutions',
    robots: 'index, follow'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className={'page__background'}>
        <Navigation></Navigation>
        <div className={'page__container'}>
            {children}
        </div>
        </body>
        </html>
    )
}
