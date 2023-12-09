import { fira } from "@utils/font";
import Header from "./header"
import Impr from '@assets/imp25112023.mp3';
import OneScene from '@assets/one-scene.mp3';

export default function Improvisation() {
    return (
        <Header>
            <div className="grid auto-rows-max gap-12">
                <div className="flex flex-col gap-4">
                    <p className={`${fira.className} text-md text-gray-400`}>
                        title: 'one scene', dec 1, 2023<br />
                    </p>
                    <div className="flex flex-row gap-4 justify-start items-center">
                        <audio src={OneScene} controls className="text-xs "></audio>
                        <a href={OneScene} download className="text-xs hover:text-gray-500 underline underline-offset-8">download</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className={`${fira.className} text-md text-gray-400`}>
                        title: 'impr', nov 27, 2023<br />
                    </p>
                    <div className="flex flex-row gap-4 justify-start items-center">
                        <audio src={Impr} controls className="text-xs "></audio>
                        <a href={Impr} download className="text-xs hover:text-gray-500 underline underline-offset-8">download</a>
                    </div>
                </div>
            </div>
        </Header >
    )
}