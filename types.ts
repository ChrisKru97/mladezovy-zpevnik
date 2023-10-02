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
  History,
  Keyboard,
  Search,
  Settings,
}
