"use client";
import { fira } from "@utils/font";
import Header from "@components/Header";
import Impr from "@assets/imp25112023.mp3";
import OneScene from "@assets/one-scene.mp3";
import Hbtm from "@assets/hbtm.mp3";
import Zerotier from "@assets/zerotier.mp3";
import Dosed from "@assets/dosed.mp3";
import Jaco from "@assets/likejaco.mp3";
import runetale from "@assets/we-glósóli.mp3";

export default function Improvisation() {
  return (
    <Header>
      <div className="grid auto-rows-max gap-12 justify-center">
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'we glósóli', feb 11, 2024
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={runetale} controls className="text-xs "></audio>
            <a
              href={runetale}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'danche', feb 11, 2024
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={Jaco} controls className="text-xs "></audio>
            <a
              href={Jaco}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'dosed', dec 15, 2023
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={Dosed} controls className="text-xs "></audio>
            <a
              href={Dosed}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'zerotier', dec 14, 2023
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={Zerotier} controls className="text-xs "></audio>
            <a
              href={Zerotier}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'hbtm 26', dec 9, 2023
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={Hbtm} controls className="text-xs "></audio>
            <a
              href={Hbtm}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'one scene', dec 1, 2023
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={OneScene} controls className="text-xs "></audio>
            <a
              href={OneScene}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className={`${fira.className} text-md text-gray-400`}>
            title: 'impr', nov 27, 2023
            <br />
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <audio src={Impr} controls className="text-xs "></audio>
            <a
              href={Impr}
              download
              className="text-xs hover:text-gray-500 underline underline-offset-8"
            >
              download
            </a>
          </div>
        </div>
      </div>
    </Header>
  );
}
