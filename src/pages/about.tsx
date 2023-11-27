import { fira } from "@utils/font";
import Header from "./header"

export default function About() {
    return (
        <Header>
            <p className={`${fira.className} text-xs`}>
                development and CEO of runetale,<br />
                interest include wasm, compilier, kernel, security, and<br />
                p2p mesh network.<br />
                i often paint and also play bass, guitar, and digital-synthesizer,<br />
                so i may upload some of my compositions.<br />
            </p>
        </Header>
    )
}

