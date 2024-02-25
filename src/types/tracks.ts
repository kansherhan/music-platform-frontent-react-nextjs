export interface IComment {
  _id: string;
  username: string;
  text: string;
}

// TODO: picture, audio Удалить nullable потом
export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture?: string;
  audio?: string;
  comments: IComment[];
}
