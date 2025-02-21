import { ReactElement } from "react";

export interface ShowMetadata {
  id: number;
  isHighlight: boolean;
  isHero: boolean;
  forUser: boolean;
  cover: string;
  title: string;
  date: { startDate: Date; endDate: Date };
  time: number;
  shortDesc?: string;
  longDesc?: string;
  link: string;
  staff: { id: number; pos: string; name: string }[];
  bookingData?: {
    date: { id: number; date: Date }[];
  };
}

export interface AboutUsCover {
  id: number;
  src: string;
}

export interface News {
  id: number;
  title: string;
  shortDesc?: string;
  longDesc?: string;
  cover: string;
}

export interface Partner {
  id: number;
  alt: string;
  logo: string;
}

export interface Icon {
  id: number;
  href: string;
  dom: string;
}

export interface FAQ {
  id: number;
  header: string;
  body: string | ReactElement;
}

export type Genre =
  | "all"
  | "orchestra"
  | "ballet"
  | "play"
  | "music"
  | "circus"
  | "live-show"
  | "event";
