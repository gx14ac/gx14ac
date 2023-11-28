import Header from "./header"
import { fira } from "@utils/font"

export default function Home() {
  return (
    <Header>
      <p className={`${fira.className} text-xs`}>
        development of runetale,<br />
        interest include wasm, compilier, kernel, security, and<br />
        p2p mesh network.<br />
        i often paint and also play bass, guitar, and digital-synthesizer,<br />
        so i may upload some of my compositions.<br />
      </p>
    </Header>
  )
}