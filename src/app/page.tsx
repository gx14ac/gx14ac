'use client';
import Header from "@components/Header"
import { fira } from "@utils/font"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header>
        <div className="grid gap-10">
          <p className={`${fira.className} text-4xl mt-2`}>
            gx14ac
          </p>
          <p className={`${fira.className} text-md`}>
            i&apos;m shintaro okumura, also known as gx14ac,<br />
            a programmer.<br />
            i build runetale, a p2p mesh network,<br />
            and write most things from scratch in zig.<br />
            i also paint and play bass and guitar.<br />
            pragmatic, not dogmatic.<br />
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
        </div>
      </Header>
    </>
  )
}