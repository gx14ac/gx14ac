import Header from "./header"
import { fira } from "@utils/font"
import Link from "next/link"

export default function Misc() {
    return (
        <Header>
            <div className="grid grid-cols-2 items-center justify-between gap-6">
                <Link href="/misc/grumble" className={`${fira.className} text-lg hover:text-gray-500 underline underline-offset-8`} onClick={() => { }}>
                    grumble, wasm kernel p2p
                </Link>
                <p className={`${fira.className} text-xs text-gray-400`}>
                    nov 25, 2023<br />
                </p>
                <Link href="/misc/new-normal" className={`${fira.className} text-lg hover:text-gray-500 underline underline-offset-8`} onClick={() => { }}>
                    new normal
                </Link>
                <p className={`${fira.className} text-xs text-gray-400`}>
                    nov 25, 2023<br />
                </p>
            </div>
        </Header>
    )
}