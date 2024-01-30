'use client';
import Image from "next/image"
import { useRouter } from "next/navigation"
import { fira } from "@utils/font"
import Link from "next/link"

type ComponentProps = {
    children: React.ReactNode
}

export default function Header({ children }: ComponentProps) {
    const router = useRouter()
    return (
        <div className="md:flex md:justify-start md:items-start md:gap-30 md:mt-32 md:ml-18 lg:ml-20 mini:ml-6 mini:gap-2 supermini:gap-2">
            <div className="md:grid md:gap-6 md:mt-6 sm:mt-10 sm:flex sm:items-center sm:justify-evenly sm:mr-40 mini:gap-2 supermini:gap-2">
                <Image
                    src="/assets/artwork.png"
                    className="mini:invisible md:visible sm:visible supermini:invisible"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Link href="/" className={`${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`} onClick={() => router.push('/')}>
                    About
                </Link>
                <Link href="/writing" className={`${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`} onClick={() => router.push('/writing')}>
                    Writing
                </Link>
                <Link href="/misc" className={`${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`} onClick={() => router.push('/misc')}>
                    Misc
                </Link>
                <Link href="/artworks" className={`${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`} onClick={() => router.push('/artworks')}>
                    Artworks
                </Link>
                <Link href="/photos" className={`${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`} onClick={() => router.push('/photos')}>
                    Photos
                </Link>
                <Link href="/improvisation" className={`${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`} onClick={() => router.push('/improvisation')}>
                    Impr
                </Link>
            </div>
            <div className="mt-8 mini:mt-16 mini:ml-2">
                {children}
            </div>
        </div >
    )
}