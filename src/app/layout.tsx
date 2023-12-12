import { ReactNode } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja">
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <body>
                <div className="">
                    <main className="">{children}</main>
                </div>
            </body>
        </html>
    )
}