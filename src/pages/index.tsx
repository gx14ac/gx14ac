import Header from "./header"
import { fira } from "@utils/font"
import Link from "next/link"
import Image from "next/image"


export default function Home() {
  return (
    <>
      <Header>
        <p className={`${fira.className} text-sm`}>
          development of runetale,<br />
          interest include wasm, compilier, kernel, security, and<br />
          p2p mesh network.<br />
          i often paint and also play bass, guitar, and digital-synthesizer,<br />
          so i may upload some of my compositions.<br />
        </p>
        <div className="flex justify-start items-start gap-4">
          <Link href="https://github.com/gx14ac">
            <Image
              src="/assets/github-mark-white.png"
              alt="logo"
              className=""
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://twitter.com/shintaoku">
            <Image
              src="/assets/x-logo.png"
              alt="logo"
              className=""
              width={20}
              height={20}
            />
          </Link>
        </div>
      </Header>
    </>
  )
}