import { fira } from "@utils/font";
import Header from "./header"

export default function Improvisation() {
    return (
        <Header>
            <p className={`${fira.className} text-xs`}>
                improvisation<br />
            </p>
        </Header>
    )
}