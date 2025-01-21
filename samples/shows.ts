import { ShowMetadata } from "../types/extra";
import _ from "lodash";

const shows: ShowMetadata[] = [
  {
    id: 0,
    isHero: true,
    isHighlight: true,
    cover: "/show1.jpg",
    title: "Hàm Lệ Minh Châu",
    date: new Date("2025-10-11"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 1,
    isHero: true,
    isHighlight: true,
    cover: "/show2.jpg",
    title: "Les Misérables",
    date: new Date("2025-09-20"),
    time: 150,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 2,
    isHero: true,
    isHighlight: true,
    cover: "/show3.jpg",
    title: "Hương Sắc Tình Yêu",
    date: new Date("2025-01-21"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 3,
    isHero: true,
    isHighlight: true,
    cover: "/show4.jpg",
    title: "Ánh Sáng Vĩnh Cửu",
    date: new Date("2025-05-13"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 4,
    isHero: true,
    isHighlight: true,
    cover: "/show5.jpg",
    title: "Dưới Ánh Trăng Mờ",
    date: new Date("2025-01-09"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 5,
    isHero: false,
    isHighlight: true,
    cover: "/show5.jpg",
    title: "Dưới Ánh Trăng Mờ",
    date: new Date("2025-01-09"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 6,
    isHero: false,
    isHighlight: true,
    cover: "/show5.jpg",
    title: "Dưới Ánh Trăng Mờ",
    date: new Date("2025-01-09"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 7,
    isHero: false,
    isHighlight: true,
    cover: "/show5.jpg",
    title: "Dưới Ánh Trăng Mờ",
    date: new Date("2025-01-09"),
    time: 120,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
];

export default shows;

export const heroShows = _.filter(shows, (show) => show.isHero);
export const highlightShows = _.filter(shows, (show) => show.isHighlight);
