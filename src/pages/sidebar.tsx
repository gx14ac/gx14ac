import Image from "next/image"
import { useRouter } from "next/router"
import { routes } from "./routes"
import { fira } from "@utils/font"

export default function Sidebar() {
    const router = useRouter()
    return (
        <div>
            <Image
                src="/assets/artwork.png"
                className="pt-10 pl-3 w-auto"
                alt="logo"
                sizes="20vw"
                width={0}
                height={0}
            />
            < div className="grid gap-1 place-items-start h-20 pl-8 pt-10" >
                <a href="https://runetale.com" className={`${fira.className} text-black text-lg hover:text-blue-600`} onClick={() => router.push(routes.about)}>
                    About
                </a>
                <a href="https://runetale.com" className={`${fira.className} "text-black text-lg hover:text-blue-600`} onClick={() => router.push(routes.writing)}>
                    Writing
                </a>
                <a href="https://runetale.com" className={`${fira.className} "text-black text-lg hover:text-blue-600`} onClick={() => router.push(routes.misc)}>
                    Misc
                </a>
                <a href="https://runetale.com" className={`${fira.className} "text-black text-lg hover:text-blue-600`} onClick={() => router.push(routes.artwork)}>
                    Artwork
                </a>
            </div >
        </div >
    )
}