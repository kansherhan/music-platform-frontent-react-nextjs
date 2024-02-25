import { TrackToolbar } from "@/components/tracks/TrackToolbar";
import { ITrack } from "@/types/tracks";
import { TrackList } from "@/components/tracks/TrackList";

export default function TrackPage() {
  const tracks: ITrack[] = [
    {
      _id: "65d9b142996f4b196eba4ad3",
      name: "Трек 2",
      artist: "Кайрат Нуртас",
      text: "Иди нахуй",
      listens: 0,
      comments: [],
      audio:
        "https://cdn1.sefon.pro/download/mWvrmNXSnxDA7XwjPsrzFw/1708894076/239/NK%20-%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%20%D0%92%D0%B8%D0%BD%D0%BE.mp3",
      picture: "https://picsum.photos/70/70",
    },
    {
      _id: "65d9b145996f4b196eba4ad5",
      name: "Трек 3",
      artist: "Кайрат Нуртас",
      text: "Иди нахуй",
      listens: 0,
      comments: [],
      picture: "https://picsum.photos/70/70",
      audio:
        "https://cdn1.sefon.pro/download/mWvrmNXSnxDA7XwjPsrzFw/1708894076/239/NK%20-%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%20%D0%92%D0%B8%D0%BD%D0%BE.mp3",
    },
    {
      _id: "65d9b7880849f6f6d87bf196",
      name: "fdsaf",
      artist: "fdsafdsfdsafdsaf",
      text: "Hello",
      listens: 0,
      audio:
        "https://cdn1.sefon.pro/download/mWvrmNXSnxDA7XwjPsrzFw/1708894076/239/NK%20-%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%20%D0%92%D0%B8%D0%BD%D0%BE.mp3",
      comments: [],
      picture: "https://picsum.photos/70/70",
    },
  ];

  return (
    <>
      <TrackToolbar />

      <TrackList tracks={tracks} />
    </>
  );
}
