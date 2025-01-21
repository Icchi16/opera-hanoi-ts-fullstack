export interface ShowMetadata {
  id: number;
  isHighlight: boolean;
  isHero: boolean;
  cover: string;
  title: string;
  date: Date;
  time: number;
  staff: { id: number; pos: string; name: string }[];
}
