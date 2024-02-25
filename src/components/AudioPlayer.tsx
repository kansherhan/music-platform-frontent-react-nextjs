"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { Slider } from "primereact/slider";

import { ITrack } from "@/types/tracks";

export function AudioPlayer() {
  const track: ITrack = {
    _id: "65d9b142996f4b196eba4ad3",
    name: "Трек 2",
    artist: "Кайрат Нуртас",
    text: "Иди нахуй",
    listens: 0,
    comments: [
      {
        _id: Math.random().toString(),
        username: "Sherhan",
        text: "Dermo no perni",
      },
      {
        _id: Math.random().toString(),
        username: "Sherhan",
        text: "Dermo no perni",
      },
      {
        _id: Math.random().toString(),
        username: "Sherhan",
        text: "Dermo no perni",
      },
    ],
    audio:
      "https://cdn1.sefon.pro/download/mWvrmNXSnxDA7XwjPsrzFw/1708894076/239/NK%20-%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%20%D0%92%D0%B8%D0%BD%D0%BE.mp3",
    picture: "https://picsum.photos/256/256",
  };

  const [audioSlider, setAudioSlider] = useState(0);
  const [audioVolumeSlider, setAudioVolumeSlider] = useState(100);

  return (
    <div className="fixed w-screen py-2 px-4 bottom-0 left-0 border-round border-1 border-solid border-200">
      <div className="container flex flex-row align-items-center justify-content-between">
        <div className="flex">
          <Button icon={`pi ${false ? "pi-play" : "pi-stop-circle"}`} />

          <div className="ml-2">
            <h2
              className="text-500 cursor-pointer hover:underline"
              // onClick={() => router.push(`/tracks/${track._id}`)}
            >
              {track.name}
            </h2>
            <h3 className="font-normal text-sm opacity-90">{track.artist}</h3>
          </div>
        </div>

        <div className="flex align-items-center">
          <Slider
            value={audioSlider}
            onChange={(e) => setAudioSlider(e.value as number)}
            className="w-25rem mr-2"
          />
          <span>00:30 / 02:15</span>
        </div>

        <div className="flex align-items-center">
          <i className="pi pi-volume-up text-xl"></i>
          <Slider
            value={audioVolumeSlider}
            onChange={(e) => setAudioVolumeSlider(e.value as number)}
            className="w-10rem ml-2"
          />
        </div>
      </div>
    </div>
  );
}
