import { ITrack } from "@/types/tracks";
import { Card } from "@/components/Card";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

interface TrackDetailPageProps {
  params: {
    id: string;
  };
}

export default function TrackDetailPage({ params }: TrackDetailPageProps) {
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

  return (
    <Card className="flex-column">
      <div className="flex mb-5">
        <img width={256} height={256} src={track.picture} alt={track.name} />

        <div className="flex flex-column ml-3">
          <h1 className="mb-2">{track.name}</h1>
          <h2 className="opacity-80 mb-2">{track.artist}</h2>
          <p className="mb-4">Прослушиваний: {track.listens}</p>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-2">Текст</h3>

        <p>
          {new Array(200)
            .fill(null)
            .map((i) => Math.random().toString())
            .map((i) => (
              <span key={i}> {track.text}</span>
            ))}
        </p>
      </div>

      <div className="mb-5 flex flex-column align-items-end w-full">
        <div className="w-full mb-2">
          <h3 className="mb-2">Коментарий</h3>

          <InputText
            id="username"
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="Имя"
            className="w-full mb-2"
          />

          <InputTextarea
            id="comment-text"
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="Текст коментария"
            rows={5}
            className="w-full"
          />
        </div>

        <Button icon="pi pi-send" label="Отправить" className="w-13rem" />
      </div>

      <div className="w-full">
        {track.comments.map((comment, index) => (
          <Card
            key={comment._id}
            className={
              "bg-white flex-column " +
              (track.comments.length - 1 !== index ? "mb-2" : "")
            }
          >
            <span className="text-lg mb-2">Автор: {comment.username}</span>
            <span>Комент: {comment.text}</span>
          </Card>
        ))}
      </div>
    </Card>
  );
}
