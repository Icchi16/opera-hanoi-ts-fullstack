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
  index: number;
  id: string;
  header: string;
  body: string;
}
