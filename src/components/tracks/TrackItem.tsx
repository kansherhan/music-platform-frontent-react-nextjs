"use client";

import { ITrack } from "@/types/tracks";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { Card } from "@/components/Card";

interface ITrackItemProps {
  track: ITrack;
  active?: boolean;
}

export function TrackItem({
  track,
  active = false,
  ...props
}: ITrackItemProps & any) {
  const router = useRouter();

  return (
    <Card {...props}>
      <div className="flex flex-row">
        <Button icon={`pi ${active ? "pi-play" : "pi-stop-circle"}`} />

        <img
          className="border-round ml-2"
          width={48}
          height={48}
          src={track.picture}
          alt={track.name}
        />

        <div className="ml-2">
          <h2
            className="text-500 cursor-pointer hover:underline"
            onClick={() => router.push(`/tracks/${track._id}`)}
          >
            {track.name}
          </h2>
          <h3 className="font-normal text-sm opacity-90">{track.artist}</h3>
        </div>
      </div>

      <div className="flex flex-row align-items-center">
        {active && <span className="mr-3">00:30 / 02:12</span>}

        <Button icon="pi pi-trash" />
      </div>
    </Card>
  );
}
