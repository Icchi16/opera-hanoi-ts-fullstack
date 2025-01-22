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
  longDesc?: string
  staff: { id: number; pos: string; name: string }[];
}
