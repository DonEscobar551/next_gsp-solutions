import './globals.css'
import Navigation from "@/components/Navigation/Navigation";

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
        {children}</body>
        </html>
    )
}
