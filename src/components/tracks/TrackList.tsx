import { ITrack } from "@/types/tracks";
import { TrackItem } from "@/components/tracks/TrackItem";

interface ITrackListProps {
  tracks: ITrack[];
}

export function TrackList({ tracks }: ITrackListProps) {
  return (
    <>
      {tracks.map((track, index) => (
        <TrackItem key={track._id} track={track} className="mt-3" />
      ))}
    </>
  );
}
