import { Html, Head, Main, NextScript } from 'next/document'
import Image from "next/image"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body className="bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
