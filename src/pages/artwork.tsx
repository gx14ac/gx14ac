import Header from "./header"
import Image from "next/image"
import { fira } from "@utils/font"
import Link from "next/link"

export default function Artwork() {
    return (
        <Header>
            <div className="flex justify-center items-center">
                <div className="grid gap-16 mt-16">
                    <div>
                        <Image
                            src="/assets/singularity.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'singularity', oct 19, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/under-the-bridge.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'under-the-bridge', oct 13, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/work-in-progress.jpg"
                            className=""
                            alt="logo"
                            width={700}
                            height={700}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'work-in-pr0gress', aug 25, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/shadow-tree.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'shadow-tree', jul 9, 2023<br />
                        </p>
                    </div>
                </div>
            </div >
        </Header>
    )
}