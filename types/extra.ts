export interface ShowMetadata {
  id: number;
  isHighlight: boolean;
  isHero: boolean;
  forUser: boolean;
  cover: string;
  title: string;
  date: Date;
  time: number;
  shortDesc?: string;
  longDesc?: string;
  staff: { id: number; pos: string; name: string }[];
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
