export type Song = {
  name: string;
  number: number;
  withChords: string;
  withoutChords: string;
};

export type Theme = {
  primary: string;
  // text: string;
};

export enum IconType {
  Heart,
  HeartOutlined,
  HeartWhite,
  History,
  Keyboard,
  Search,
  Settings,
}

export type NavigationParams = {
  Home: undefined;
  Favorites: undefined;
  History: undefined;
  Song: Song;
};
