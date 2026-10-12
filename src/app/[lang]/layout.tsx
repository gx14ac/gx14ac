import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, locales } from '@utils/i18n'

import '../globals.css'

export const metadata: Metadata = {
    title: 'gx14ac',
    description: '',
}

export const dynamicParams = false

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }))
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
    if (!isLocale(params.lang)) notFound()
    return (
        <html lang={params.lang}>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className="bg-black">
                <main className="">{children}</main>
            </body>
        </html>
    )
}
