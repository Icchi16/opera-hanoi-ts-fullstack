import { ShowMetadata } from "../types/extra";
import _ from "lodash";

const shows: ShowMetadata[] = [
  {
    id: 0,
    isHero: true,
    isHighlight: true,
    link: "ham-le-minh-chau",
    cover: "/show1.jpg",
    title: "Hàm Lệ Minh Châu",
    date: {
      startDate: new Date("2025-02-11"),
      endDate: new Date("2025-03-10"),
    },
    time: 120,
    forUser: true,
    staff: [
      { id: 0, pos: "Director", name: "Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
    bookingData: {
      date: [
        { id: 0, date: new Date("2025-10-11 19:00") },
        { id: 1, date: new Date("2025-10-12 17:00") },
        { id: 2, date: new Date("2025-10-12 21:00") },
        { id: 3, date: new Date("2025-10-13 18:00") },
        { id: 4, date: new Date("2025-10-14 17:00") },
      ],
    },
  },
  {
    id: 1,
    isHero: true,
    isHighlight: true,
    link: "les-miserables",
    cover: "/show2.jpg",
    title: "Les Misérables",
    date: {
      startDate: new Date("2025-01-30"),
      endDate: new Date("2025-02-12"),
    },
    time: 150,
    forUser: true,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
    bookingData: {
      date: [
        { id: 0, date: new Date("2025-09-20 19:00") },
        { id: 1, date: new Date("2025-10-12 17:00") },
        { id: 2, date: new Date("2025-10-12 21:00") },
        { id: 3, date: new Date("2025-10-13 18:00") },
        { id: 4, date: new Date("2025-10-14 17:00") },
      ],
    },
  },
  {
    id: 2,
    isHero: true,
    isHighlight: true,
    cover: "/show3.jpg",
    link: "huong-sac-tinh-yeu",
    title: "Hương Sắc Tình Yêu",
    date: {
      startDate: new Date("2025-01-21"),
      endDate: new Date("2025-01-30"),
    },
    time: 175,
    forUser: true,
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
    link: "anh-sang-vinh-cuu",
    title: "Ánh Sáng Vĩnh Cửu",
    date: {
      startDate: new Date("2025-02-28"),
      endDate: new Date("2025-03-01"),
    },
    time: 90,
    forUser: true,
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
    link: "duoi-anh-trang-mo",
    title: "Dưới Ánh Trăng Mờ",
    date: {
      startDate: new Date("2025-02-28"),
      endDate: new Date("2025-03-02"),
    },
    time: 120,
    forUser: true,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 5,
    isHero: false,
    isHighlight: true,
    cover: "/show6.jpg",
    link: "vu-khuc-tren-may",
    title: "Vũ khúc Trên Mây",
    date: {
      startDate: new Date("2025-07-11"),
      endDate: new Date("2025-07-21"),
    },
    time: 120,
    forUser: false,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 6,
    isHero: false,
    isHighlight: true,
    cover: "/show7.jpg",
    link: "nang-mai-ruc-ro",
    title: "Nắng Mai Rạng Rỡ",
    date: {
      startDate: new Date("2025-04-12"),
      endDate: new Date("2025-04-22"),
    },
    time: 120,
    forUser: false,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
  {
    id: 7,
    isHero: false,
    isHighlight: true,
    cover: "/show8.jpg",
    link: "giai-dieu-vinh-cuu",
    title: "Giai Điệu Vĩnh Cửu",
    date: {
      startDate: new Date("2025-03-30"),
      endDate: new Date("2025-04-18"),
    },
    time: 120,
    forUser: false,
    staff: [
      { id: 0, pos: "Director", name: "Emeritus Artist Trần Ly Ly" },
      { id: 1, pos: "Artistic Director", name: "Phan Mạnh Đức" },
    ],
  },
];

export default shows;

export const heroShows = _.filter(shows, (show) => show.isHero);
export const highlightShows = _.filter(shows, (show) => show.isHighlight);
export const forYouShows = _.sampleSize(
  _.filter(shows, (show) => show.forUser),
  2
);
