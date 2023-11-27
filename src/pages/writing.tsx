import Header from "./header"
import { fira } from "@utils/font"
import Link from "next/link"

export default function Writing() {
    return (
        <Header>
            <p className={`${fira.className}`}>
                writing<br />
            </p>
            <div className="grid grid-flow-row auto-rows-max gap-2">
                <div className="grid grid-cols-2 items-center justify-between gap-20">
                    <Link href="/writing/new-normal" className={`${fira.className} text-lg hover:text-gray-500 underline underline-offset-8`} onClick={() => { }}>
                        The New Normal
                    </Link>
                    <p className={`${fira.className} text-xs text-gray-400`}>
                        nov 25, 2023<br />
                    </p>
                </div>
            </div>
        </Header>
    )
}