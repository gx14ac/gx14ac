import { fira } from "@utils/font";
import Header from "./header"
import { useRef, useState } from "react";
import MyFile from '@assets/imp25112023.mp3';


export default function Improvisation() {
    const audioRef = useRef<HTMLVideoElement>()
    const [isPlaying, setPlaying] = useState(false)

    const play = () => {
        if (!isPlaying) {
            audioRef.current?.play();
            setPlaying(true)
        } else {
            audioRef.current?.pause();
            setPlaying(true)
        }
    }

    return (
        <Header>
            <p className={`${fira.className}`}>
                improvisation<br />
            </p>
            <div className="grid grid-flow-row auto-rows-max gap-5">
                <div className="flex justify-end items-center gap-4">
                    <audio src={MyFile} controls className="text-xs "></audio>
                    <div className="flex flex-col items-end gap-2">
                        <p className={`${fira.className} text-xs text-gray-400`}>
                            nov 27, 2023<br />
                        </p>
                        <a href={MyFile} download className="hover:text-gray-500 underline underline-offset-8">dowload</a>
                    </div>
                </div>
            </div>
        </Header>
    )
}