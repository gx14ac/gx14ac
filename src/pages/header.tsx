import Image from "next/image"
import { useRouter } from "next/router"
import { routes } from "./routes"
import { fira } from "@utils/font"
import Link from "next/link"

type ComponentProps = {
    children: React.ReactNode
}

export default function Header({ children }: ComponentProps) {
    const router = useRouter()
    return (
        <div className="flex justify-start items-start gap-40 mt-16 ml-32">
            <div className="grid gap-2 mt-6">
                <Image
                    src="/assets/artwork.png"
                    className=""
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Link href="/" className={`${fira.className} mt-4 ml-5 hover:text-blue-600`} onClick={() => router.push(routes.home)}>
                    About
                </Link>
                <Link href="/writing" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push(routes.writing)}>
                    Writing
                </Link>
                <Link href="/misc" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push(routes.misc)}>
                    Misc
                </Link>
                <Link href="/artwork" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push(routes.artwork)}>
                    Artwork
                </Link>
                <Link href="/improvisation" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push(routes.improvisation)}>
                    Improvisation
                </Link>
            </div>
            <div className="grid gap-10 mt-8">
                <p className={`${fira.className} text-4xl mt-2`}>
                    gx14ac
                </p>
                {children}
            </div>
            <Image
                src="/assets/about.gif"
                alt="logo"
                className="mr-16 fixed top-14 right-0 invisible lg:visible"
                width={300}
                height={300}
            />
        </div>
    )
}

