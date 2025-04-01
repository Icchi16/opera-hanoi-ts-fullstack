import _ from "lodash";

// For floor 1
export const SEAT_RADIUS = 4.5;

export const zoneEntryArr = [
  { id: 0, text: "L1B", cord: { x: 1.21, y: 204.92 }, rota: 90 },
  { id: 1, text: "L1C", cord: { x: 1.21, y: 254.38 }, rota: 90 },
  { id: 2, text: "L1D", cord: { x: 1.21, y: 303.02 }, rota: 90 },
  { id: 3, text: "L1E", cord: { x: 2.16, y: 372.86 }, rota: 75.95 },
  { id: 4, text: "L1F", cord: { x: 194.41, y: 422.17 }, rota: -90 },
  { id: 5, text: "L1G", cord: { x: 233.79, y: 422.17 }, rota: -90 },
  { id: 6, text: "L1H", cord: { x: 417.47, y: 372.86 }, rota: -75.95 },
  { id: 7, text: "L1I", cord: { x: 419.89, y: 303.02 }, rota: -90 },
  { id: 8, text: "L1J", cord: { x: 419.89, y: 254.38 }, rota: -90 },
  { id: 9, text: "L1K", cord: { x: 419.89, y: 204.92 }, rota: -90 },
];

{
  /* zone shape */
}
export const zoneArr = [
  {
    id: "zone-B",
    className: "zone-B",
    shapes: {
      type: "polygon",
      props: {
        points: "38.22 165.84 65.9 165.84 65.9 213.2 38.16 228.53 38.22 165.84",
      },
    },
  },
  {
    id: "zone-K",
    className: "zone-B",
    shapes: {
      type: "polygon",
      props: {
        points:
          "384.87 165.84 357.18 165.84 357.18 213.2 384.93 228.53 384.87 165.84",
      },
    },
  },
  {
    id: "zone-C",
    className: "zone-C",
    shapes: {
      type: "polygon",
      props: {
        points:
          "38.12 229.96 65.98 214.4 65.97 259.83 38.14 277.87 38.12 229.96",
      },
    },
  },
  {
    id: "zone-J",
    className: "zone-C",
    shapes: {
      type: "polygon",
      props: {
        points:
          "384.97 229.96 357.11 214.4 357.12 259.83 384.95 277.87 384.97 229.96",
      },
    },
  },
  {
    id: "zone-D",
    className: "zone-D",
    shapes: {
      type: "path",
      props: {
        d: "M38.22,279.31l27.72-17.99c-.05,9.6-.46,20.96,1.25,29.35s4.36,15.73,4.36,15.73l-32.79,28.28s-.36-6.94-.43-9.6c-.06-2.17-.19-7.89-.19-7.89l.09-37.88Z",
      },
    },
  },
  {
    id: "zone-I",
    className: "zone-D",
    shapes: {
      type: "path",
      props: {
        d: "M384.87,279.31l-27.72-17.99c.05,9.6.46,20.96-1.25,29.35-1.76,8.62-4.36,15.73-4.36,15.73l32.79,28.28s.36-6.94.43-9.6c.06-2.17.19-7.89.19-7.89l-.09-37.88Z",
      },
    },
  },
  {
    id: "zone-E",
    className: "zone-E",
    shapes: {
      type: "path",
      props: {
        d: "M72.01,307.7c2.22,6.74,5.19,13.54,7.27,17.7,2.39,4.79,5.4,10.37,8.8,15.27l-38.37,38.12c-2.41-5.11-4.76-10.96-5.12-12.76-.77-3.82-3.78-15.39-3.78-15.39l-1.83-14.51,33.05-28.42Z",
      },
    },
  },
  {
    id: "zone-H",
    className: "zone-E",
    shapes: {
      type: "path",
      props: {
        d: "M351.08,307.7c-2.22,6.74-5.19,13.54-7.27,17.7-2.39,4.79-5.4,10.37-8.8,15.27l38.37,38.12c2.41-5.11,4.76-10.96,5.12-12.76.77-3.82,3.78-15.39,3.78-15.39l1.83-14.51-33.05-28.42Z",
      },
    },
  },
  {
    id: "zone-F",
    className: "zone-F",
    shapes: {
      type: "path",
      props: {
        d: "M112.09,367.16c8.08,6.6,18.9,13.81,31.12,18.88,10.06,4.17,24.11,7.39,35.28,7.26-.11,1.13-.1,4,2.32,6.42,2.65,2.64,5.58,2.45,6.47,2.48v41.88c-17.25-.66-37-7.59-56.79-22.08-16.2-11.86-29.1-27.85-34.52-38.82l16.12-16.01Z",
      },
    },
  },
  {
    id: "zone-G",
    className: "zone-F",
    shapes: {
      type: "path",
      props: {
        d: "M311,367.16c-8.08,6.6-18.9,13.81-31.12,18.88-10.06,4.17-24.11,7.39-35.28,7.26.11,1.13.1,4-2.32,6.42-2.65,2.64-5.58,2.45-6.47,2.48v41.88c17.25-.66,37-7.59,56.79-22.08,16.2-11.86,29.1-27.85,34.52-38.82l-16.12-16.01Z",
      },
    },
  },
  {
    id: "zone-A-right",
    className: "zone-A",
    shapes: {
      type: "polygon",
      props: {
        points:
          "332.65 142.25 265.46 164.53 318.02 323.22 346.56 313.29 354.03 269.02 355.37 211.64 332.65 142.25",
      },
    },
  },
  {
    id: "zone-A-left",
    className: "zone-A",
    shapes: {
      type: "polygon",
      props: {
        points:
          "90.56 142.22 157.73 164.59 104.94 323.21 76.41 313.24 69.01 268.95 67.75 211.58 90.56 142.22",
      },
    },
  },
  {
    id: "zone-A-center",
    className: "zone-A",
    shapes: {
      type: "polygon",
      props: {
        points:
          "314.87 341.81 258.46 169.47 164.63 169.47 119.76 306.55 108.22 341.81 120.67 361.18 121.06 361.79 184.58 371.18 238.51 371.18 302.03 361.79 314.87 341.81",
      },
    },
  },
];

export const zoneALegendArr = [
  {
    id: 0,
    text: "A",
    cordL: { x: 155.11, y: 177.85 },
    cordR: { x: 262, y: 177.85 },
  },
  {
    id: 1,
    text: "B",
    cordL: { x: 151.01, y: 193.25 },
    cordR: { x: 266.84, y: 193.25 },
  },
  {
    id: 2,
    text: "C",
    cordL: { x: 145.14, y: 208.68 },
    cordR: { x: 271.71, y: 208.68 },
  },
  {
    id: 3,
    text: "D",
    cordL: { x: 140.26, y: 224.81 },
    cordR: { x: 277.01, y: 224.81 },
  },
  {
    id: 4,
    text: "E",
    cordL: { x: 135.52, y: 240.31 },
    cordR: { x: 282.66, y: 240.31 },
  },
  {
    id: 5,
    text: "F",
    cordL: { x: 130.59, y: 255.77 },
    cordR: { x: 287.86, y: 255.77 },
  },
  {
    id: 6,
    text: "G",
    cordL: { x: 124.27, y: 272.14 },
    cordR: { x: 292.47, y: 272.14 },
  },
  {
    id: 7,
    text: "H",
    cordL: { x: 119.18, y: 288.14 },
    cordR: { x: 297.48, y: 288.14 },
  },
  {
    id: 8,
    text: "I",
    cordL: { x: 115.8, y: 302.82 },
    cordR: { x: 304.3, y: 302.82 },
  },
  {
    id: 9,
    text: "J",
    cordL: { x: 109.97, y: 319.06 },
    cordR: { x: 309.47, y: 319.06 },
  },
  {
    id: 10,
    text: "K",
    cordL: { x: 103.74, y: 336.57 },
    cordR: { x: 313.45, y: 336.57 },
  },
  {
    id: 11,
    text: "L",
    cordL: { x: 108.85, y: 353.37 },
    cordR: { x: 311.4, y: 353.37 },
  },
];

export const seatZoneB = [
  { id: 0, seatId: 259, cord: { x: 55.91, y: 177.8 }, seatNo: 1 },
  { id: 1, seatId: 260, cord: { x: 55.91, y: 189.1 }, seatNo: 2 },
  { id: 2, seatId: 261, cord: { x: 55.91, y: 200.39 }, seatNo: 3 },
  { id: 3, seatId: 262, cord: { x: 55.91, y: 211.69 }, seatNo: 4 },
  { id: 4, seatId: 263, cord: { x: 44.05, y: 205.55 }, seatNo: 5 },
  { id: 5, seatId: 264, cord: { x: 44.05, y: 216.85 }, seatNo: 6 },
];
export const seatZoneK = [
  { id: 0, seatId: 333, cord: { x: 366.18, y: 177.8 }, seatNo: 1 },
  { id: 1, seatId: 334, cord: { x: 366.18, y: 189.1 }, seatNo: 2 },
  { id: 2, seatId: 335, cord: { x: 366.18, y: 200.39 }, seatNo: 3 },
  { id: 3, seatId: 336, cord: { x: 366.18, y: 211.69 }, seatNo: 4 },
  { id: 4, seatId: 337, cord: { x: 378.04, y: 205.55 }, seatNo: 5 },
  { id: 5, seatId: 338, cord: { x: 378.04, y: 216.85 }, seatNo: 6 },
];

export const seatZoneC = [
  { id: 0, seatId: 265, cord: { x: 55.91, y: 232.99 }, seatNo: 1 },
  { id: 1, seatId: 266, cord: { x: 55.91, y: 244.29 }, seatNo: 2 },
  { id: 2, seatId: 267, cord: { x: 55.91, y: 255.59 }, seatNo: 3 },
  { id: 3, seatId: 268, cord: { x: 44.05, y: 244.29 }, seatNo: 4 },
  { id: 4, seatId: 269, cord: { x: 44.05, y: 255.59 }, seatNo: 5 },
  { id: 5, seatId: 270, cord: { x: 44.05, y: 266.89 }, seatNo: 6 },
];
export const seatZoneJ = [
  { id: 0, seatId: 327, cord: { x: 366.18, y: 232.99 }, seatNo: 1 },
  { id: 1, seatId: 328, cord: { x: 366.18, y: 244.29 }, seatNo: 2 },
  { id: 2, seatId: 329, cord: { x: 366.18, y: 255.59 }, seatNo: 3 },
  { id: 3, seatId: 330, cord: { x: 378.04, y: 244.29 }, seatNo: 4 },
  { id: 4, seatId: 331, cord: { x: 378.04, y: 255.59 }, seatNo: 5 },
  { id: 5, seatId: 332, cord: { x: 378.04, y: 266.89 }, seatNo: 6 },
];

export const seatZoneD = [
  { id: 0, seatId: 271, cord: { x: 56.75, y: 282.38 }, seatNo: 1 },
  { id: 1, seatId: 272, cord: { x: 58.77, y: 293.49 }, seatNo: 2 },
  { id: 2, seatId: 273, cord: { x: 60.8, y: 304.61 }, seatNo: 3 },
  { id: 3, seatId: 274, cord: { x: 44.7, y: 293.72 }, seatNo: 4 },
  { id: 4, seatId: 275, cord: { x: 47.24, y: 304.73 }, seatNo: 5 },
  { id: 5, seatId: 276, cord: { x: 49.78, y: 315.74 }, seatNo: 6 },
];
export const seatZoneI = [
  { id: 0, seatId: 321, cord: { x: 365.34, y: 282.38 }, seatNo: 1 },
  { id: 1, seatId: 322, cord: { x: 363.32, y: 293.49 }, seatNo: 2 },
  { id: 2, seatId: 323, cord: { x: 361.29, y: 304.61 }, seatNo: 3 },
  { id: 3, seatId: 324, cord: { x: 377.39, y: 293.72 }, seatNo: 4 },
  { id: 4, seatId: 325, cord: { x: 374.85, y: 304.73 }, seatNo: 5 },
  { id: 5, seatId: 326, cord: { x: 372.31, y: 315.74 }, seatNo: 6 },
];

export const seatZoneE = [
  { id: 0, seatId: 277, cord: { x: 65.22, y: 322.92 }, seatNo: 1 },
  { id: 1, seatId: 278, cord: { x: 71.52, y: 332.3 }, seatNo: 2 },
  { id: 2, seatId: 279, cord: { x: 77.83, y: 341.67 }, seatNo: 3 },
  { id: 3, seatId: 280, cord: { x: 55.6, y: 333.24 }, seatNo: 4 },
  { id: 4, seatId: 281, cord: { x: 61.91, y: 342.62 }, seatNo: 5 },
  { id: 5, seatId: 282, cord: { x: 68.21, y: 351.99 }, seatNo: 6 },
  { id: 6, seatId: 283, cord: { x: 50.44, y: 354.13 }, seatNo: 7 },
  { id: 7, seatId: 284, cord: { x: 56.75, y: 363.5 }, seatNo: 8 },
];
export const seatZoneH = [
  { id: 0, seatId: 313, cord: { x: 356.87, y: 322.92 }, seatNo: 1 },
  { id: 1, seatId: 314, cord: { x: 350.57, y: 332.3 }, seatNo: 2 },
  { id: 2, seatId: 315, cord: { x: 344.26, y: 341.67 }, seatNo: 3 },
  { id: 3, seatId: 316, cord: { x: 366.49, y: 333.24 }, seatNo: 4 },
  { id: 4, seatId: 317, cord: { x: 360.18, y: 342.62 }, seatNo: 5 },
  { id: 5, seatId: 318, cord: { x: 353.88, y: 351.99 }, seatNo: 6 },
  { id: 6, seatId: 319, cord: { x: 371.65, y: 354.13 }, seatNo: 7 },
  { id: 7, seatId: 320, cord: { x: 365.34, y: 363.5 }, seatNo: 8 },
];

export const seatZoneF = [
  { id: 0, seatId: 285, cord: { x: 113.74, y: 380.08 }, seatNo: 1 },
  { id: 1, seatId: 286, cord: { x: 122.11, y: 387.56 }, seatNo: 3 },
  { id: 2, seatId: 287, cord: { x: 131.48, y: 393.09 }, seatNo: 5 },
  { id: 3, seatId: 288, cord: { x: 141.12, y: 397.6 }, seatNo: 7 },
  { id: 4, seatId: 289, cord: { x: 151.71, y: 401.1 }, seatNo: 9 },
  { id: 5, seatId: 290, cord: { x: 162.43, y: 403.41 }, seatNo: 11 },
  { id: 6, seatId: 291, cord: { x: 173.38, y: 404.03 }, seatNo: 13 },
  { id: 7, seatId: 292, cord: { x: 117.79, y: 400.51 }, seatNo: 15 },
  { id: 8, seatId: 293, cord: { x: 127.27, y: 406.02 }, seatNo: 17 },
  { id: 9, seatId: 294, cord: { x: 136.64, y: 410.83 }, seatNo: 19 },
  { id: 10, seatId: 295, cord: { x: 146.55, y: 414.76 }, seatNo: 21 },
  { id: 11, seatId: 296, cord: { x: 156.63, y: 417.93 }, seatNo: 23 },
  { id: 12, seatId: 297, cord: { x: 167.18, y: 419.92 }, seatNo: 25 },
  { id: 13, seatId: 298, cord: { x: 177.79, y: 420.61 }, seatNo: 27 },
];
export const seatZoneG = [
  { id: 0, seatId: 299, cord: { x: 308.34, y: 380.08 }, seatNo: 2 },
  { id: 1, seatId: 300, cord: { x: 299.98, y: 387.56 }, seatNo: 4 },
  { id: 2, seatId: 301, cord: { x: 290.61, y: 393.09 }, seatNo: 6 },
  { id: 3, seatId: 302, cord: { x: 280.97, y: 397.6 }, seatNo: 8 },
  { id: 4, seatId: 303, cord: { x: 270.38, y: 401.1 }, seatNo: 10 },
  { id: 5, seatId: 304, cord: { x: 259.66, y: 403.41 }, seatNo: 12 },
  { id: 6, seatId: 305, cord: { x: 248.7, y: 404.03 }, seatNo: 14 },
  { id: 7, seatId: 306, cord: { x: 304.29, y: 400.51 }, seatNo: 16 },
  { id: 8, seatId: 307, cord: { x: 294.82, y: 406.02 }, seatNo: 18 },
  { id: 9, seatId: 308, cord: { x: 285.45, y: 410.83 }, seatNo: 20 },
  { id: 10, seatId: 309, cord: { x: 275.54, y: 414.76 }, seatNo: 22 },
  { id: 11, seatId: 310, cord: { x: 265.46, y: 417.93 }, seatNo: 24 },
  { id: 12, seatId: 311, cord: { x: 254.91, y: 419.92 }, seatNo: 26 },
  { id: 13, seatId: 312, cord: { x: 244.3, y: 420.61 }, seatNo: 28 },
];

export const seatZoneALeft = [
  { id: 0, seatId: 0, cord: { x: 91.88, y: 153.31 }, seatNo: 1 },
  { id: 1, seatId: 1, cord: { x: 102.62, y: 156.8 }, seatNo: 3 },
  { id: 2, seatId: 2, cord: { x: 113.37, y: 160.28 }, seatNo: 5 },
  { id: 3, seatId: 3, cord: { x: 124.14, y: 163.78 }, seatNo: 7 },
  { id: 4, seatId: 4, cord: { x: 134.88, y: 167.27 }, seatNo: 9 },
  { id: 5, seatId: 5, cord: { x: 145.63, y: 170.75 }, seatNo: 11 },
  //
  { id: 6, seatId: 21, cord: { x: 87.28, y: 169.52 }, seatNo: 1 },
  { id: 7, seatId: 22, cord: { x: 98, y: 173.1 }, seatNo: 3 },
  { id: 8, seatId: 23, cord: { x: 108.72, y: 176.67 }, seatNo: 5 },
  { id: 9, seatId: 24, cord: { x: 119.46, y: 180.25 }, seatNo: 7 },
  { id: 10, seatId: 25, cord: { x: 130.18, y: 183.82 }, seatNo: 9 },
  { id: 11, seatId: 26, cord: { x: 140.89, y: 187.39 }, seatNo: 11 },
  //
  { id: 12, seatId: 42, cord: { x: 81.91, y: 185.65 }, seatNo: 1 },
  { id: 13, seatId: 43, cord: { x: 92.63, y: 189.22 }, seatNo: 3 },
  { id: 14, seatId: 44, cord: { x: 103.34, y: 192.8 }, seatNo: 5 },
  { id: 15, seatId: 45, cord: { x: 114.09, y: 196.38 }, seatNo: 7 },
  { id: 16, seatId: 46, cord: { x: 124.8, y: 199.95 }, seatNo: 9 },
  { id: 17, seatId: 47, cord: { x: 135.52, y: 203.52 }, seatNo: 11 },
  //
  { id: 18, seatId: 64, cord: { x: 78.08, y: 201.78 }, seatNo: 1 },
  { id: 19, seatId: 65, cord: { x: 88.79, y: 205.35 }, seatNo: 3 },
  { id: 20, seatId: 66, cord: { x: 99.51, y: 208.92 }, seatNo: 5 },
  { id: 21, seatId: 67, cord: { x: 110.25, y: 212.5 }, seatNo: 7 },
  { id: 22, seatId: 68, cord: { x: 120.97, y: 216.08 }, seatNo: 9 },
  { id: 23, seatId: 69, cord: { x: 131.69, y: 219.65 }, seatNo: 11 },
  //
  { id: 24, seatId: 87, cord: { x: 73.42, y: 216.65 }, seatNo: 1 },
  { id: 25, seatId: 88, cord: { x: 84.14, y: 220.22 }, seatNo: 3 },
  { id: 26, seatId: 89, cord: { x: 94.85, y: 223.8 }, seatNo: 5 },
  { id: 27, seatId: 90, cord: { x: 105.59, y: 227.38 }, seatNo: 7 },
  { id: 28, seatId: 91, cord: { x: 116.31, y: 230.95 }, seatNo: 9 },
  { id: 29, seatId: 92, cord: { x: 127.03, y: 234.52 }, seatNo: 11 },
  //
  { id: 30, seatId: 113, cord: { x: 79.82, y: 236.31 }, seatNo: 1 },
  { id: 31, seatId: 114, cord: { x: 90.54, y: 239.88 }, seatNo: 3 },
  { id: 32, seatId: 115, cord: { x: 101.28, y: 243.47 }, seatNo: 5 },
  { id: 33, seatId: 116, cord: { x: 112, y: 247.04 }, seatNo: 7 },
  { id: 34, seatId: 117, cord: { x: 122.72, y: 250.61 }, seatNo: 9 },
  //
  { id: 35, seatId: 136, cord: { x: 84.98, y: 254.87 }, seatNo: 1 },
  { id: 36, seatId: 137, cord: { x: 95.72, y: 258.45 }, seatNo: 3 },
  { id: 37, seatId: 138, cord: { x: 106.44, y: 262.02 }, seatNo: 5 },
  { id: 38, seatId: 139, cord: { x: 117.16, y: 265.59 }, seatNo: 7 },
  //
  { id: 39, seatId: 158, cord: { x: 80.03, y: 270.46 }, seatNo: 1 },
  { id: 40, seatId: 159, cord: { x: 90.77, y: 274.04 }, seatNo: 3 },
  { id: 41, seatId: 160, cord: { x: 101.49, y: 277.61 }, seatNo: 5 },
  { id: 42, seatId: 161, cord: { x: 112.21, y: 281.19 }, seatNo: 7 },
  //
  { id: 43, seatId: 181, cord: { x: 85.61, y: 288.88 }, seatNo: 1 },
  { id: 44, seatId: 182, cord: { x: 96.33, y: 292.46 }, seatNo: 2 },
  { id: 45, seatId: 183, cord: { x: 107.05, y: 296.03 }, seatNo: 3 },
  //
  { id: 46, seatId: 203, cord: { x: 90.58, y: 307.98 }, seatNo: 1 },
  { id: 47, seatId: 204, cord: { x: 101.29, y: 311.55 }, seatNo: 3 },
];

export const seatZoneARight = [
  { id: 0, seatId: 15, cord: { x: 331.21, y: 153.31 }, seatNo: 2 },
  { id: 1, seatId: 16, cord: { x: 320.47, y: 156.8 }, seatNo: 4 },
  { id: 2, seatId: 17, cord: { x: 309.72, y: 160.28 }, seatNo: 6 },
  { id: 3, seatId: 18, cord: { x: 298.95, y: 163.78 }, seatNo: 8 },
  { id: 4, seatId: 19, cord: { x: 288.2, y: 167.27 }, seatNo: 10 },
  { id: 5, seatId: 20, cord: { x: 277.46, y: 170.75 }, seatNo: 12 },
  //
  { id: 6, seatId: 36, cord: { x: 335.81, y: 169.52 }, seatNo: 2 },
  { id: 7, seatId: 37, cord: { x: 325.09, y: 173.1 }, seatNo: 4 },
  { id: 8, seatId: 38, cord: { x: 314.37, y: 176.67 }, seatNo: 6 },
  { id: 9, seatId: 39, cord: { x: 303.63, y: 180.25 }, seatNo: 8 },
  { id: 10, seatId: 40, cord: { x: 292.91, y: 183.82 }, seatNo: 10 },
  { id: 11, seatId: 41, cord: { x: 282.2, y: 187.39 }, seatNo: 12 },
  //
  { id: 12, seatId: 58, cord: { x: 341.18, y: 185.65 }, seatNo: 2 },
  { id: 13, seatId: 59, cord: { x: 330.46, y: 189.22 }, seatNo: 4 },
  { id: 14, seatId: 60, cord: { x: 319.74, y: 192.8 }, seatNo: 6 },
  { id: 15, seatId: 61, cord: { x: 309, y: 196.38 }, seatNo: 8 },
  { id: 16, seatId: 62, cord: { x: 298.28, y: 199.95 }, seatNo: 10 },
  { id: 17, seatId: 63, cord: { x: 287.57, y: 203.52 }, seatNo: 12 },
  //
  { id: 18, seatId: 81, cord: { x: 345.01, y: 201.78 }, seatNo: 2 },
  { id: 19, seatId: 82, cord: { x: 334.29, y: 205.35 }, seatNo: 4 },
  { id: 20, seatId: 83, cord: { x: 323.58, y: 208.92 }, seatNo: 6 },
  { id: 21, seatId: 84, cord: { x: 312.83, y: 212.5 }, seatNo: 8 },
  { id: 22, seatId: 85, cord: { x: 302.12, y: 216.08 }, seatNo: 10 },
  { id: 23, seatId: 86, cord: { x: 291.4, y: 219.65 }, seatNo: 12 },
  //
  { id: 24, seatId: 107, cord: { x: 349.67, y: 216.65 }, seatNo: 2 },
  { id: 25, seatId: 108, cord: { x: 338.95, y: 220.22 }, seatNo: 4 },
  { id: 26, seatId: 109, cord: { x: 328.24, y: 223.8 }, seatNo: 6 },
  { id: 27, seatId: 110, cord: { x: 317.49, y: 227.38 }, seatNo: 8 },
  { id: 28, seatId: 111, cord: { x: 306.78, y: 230.95 }, seatNo: 10 },
  { id: 29, seatId: 112, cord: { x: 296.06, y: 234.52 }, seatNo: 12 },
  //
  { id: 30, seatId: 131, cord: { x: 343.27, y: 236.31 }, seatNo: 2 },
  { id: 31, seatId: 132, cord: { x: 332.55, y: 239.88 }, seatNo: 4 },
  { id: 32, seatId: 133, cord: { x: 321.81, y: 243.47 }, seatNo: 6 },
  { id: 33, seatId: 134, cord: { x: 311.09, y: 247.04 }, seatNo: 8 },
  { id: 34, seatId: 135, cord: { x: 300.37, y: 250.61 }, seatNo: 10 },
  //
  { id: 35, seatId: 154, cord: { x: 338.11, y: 254.87 }, seatNo: 2 },
  { id: 36, seatId: 155, cord: { x: 327.36, y: 258.45 }, seatNo: 4 },
  { id: 37, seatId: 156, cord: { x: 316.65, y: 262.02 }, seatNo: 6 },
  { id: 38, seatId: 157, cord: { x: 305.93, y: 265.59 }, seatNo: 8 },
  //
  { id: 39, seatId: 177, cord: { x: 343.06, y: 270.46 }, seatNo: 2 },
  { id: 40, seatId: 178, cord: { x: 332.31, y: 274.04 }, seatNo: 4 },
  { id: 41, seatId: 179, cord: { x: 321.6, y: 277.61 }, seatNo: 6 },
  { id: 42, seatId: 180, cord: { x: 310.88, y: 281.19 }, seatNo: 8 },
  //
  { id: 43, seatId: 200, cord: { x: 337.48, y: 288.88 }, seatNo: 2 },
  { id: 44, seatId: 201, cord: { x: 326.76, y: 292.46 }, seatNo: 4 },
  { id: 45, seatId: 202, cord: { x: 316.04, y: 296.03 }, seatNo: 6 },
  //
  { id: 46, seatId: 222, cord: { x: 332.51, y: 307.98 }, seatNo: 2 },
  { id: 47, seatId: 223, cord: { x: 321.8, y: 311.55 }, seatNo: 4 },
];

export const seatZoneACenter = [
  { id: 0, seatId: 6, cord: { x: 171.49, y: 177.51 }, seatNo: 13 },
  { id: 1, seatId: 7, cord: { x: 182.79, y: 177.85 }, seatNo: 15 },
  { id: 2, seatId: 8, cord: { x: 194.09, y: 178.35 }, seatNo: 17 },
  { id: 3, seatId: 9, cord: { x: 205.39, y: 178.67 }, seatNo: 19 },
  { id: 4, seatId: 10, cord: { x: 250.6, y: 177.51 }, seatNo: 14 },
  { id: 5, seatId: 11, cord: { x: 239.3, y: 177.85 }, seatNo: 16 },
  { id: 7, seatId: 12, cord: { x: 228, y: 178.35 }, seatNo: 18 },
  { id: 9, seatId: 14, cord: { x: 216.7, y: 178.67 }, seatNo: 20 },
  //
  { id: 10, seatId: 27, cord: { x: 165.84, y: 192.84 }, seatNo: 13 },
  { id: 11, seatId: 28, cord: { x: 177.14, y: 193.73 }, seatNo: 15 },
  { id: 12, seatId: 29, cord: { x: 188.44, y: 194.55 }, seatNo: 17 },
  { id: 13, seatId: 30, cord: { x: 199.74, y: 194.55 }, seatNo: 19 },
  { id: 14, seatId: 31, cord: { x: 210.96, y: 194.98 }, seatNo: 21 },
  { id: 15, seatId: 32, cord: { x: 256.25, y: 192.84 }, seatNo: 14 },
  { id: 16, seatId: 33, cord: { x: 244.95, y: 193.73 }, seatNo: 16 },
  { id: 17, seatId: 34, cord: { x: 233.65, y: 194.55 }, seatNo: 18 },
  { id: 18, seatId: 35, cord: { x: 222.35, y: 194.55 }, seatNo: 20 },
  //
  { id: 19, seatId: 48, cord: { x: 160.27, y: 208.35 }, seatNo: 13 },
  { id: 20, seatId: 49, cord: { x: 171.56, y: 209.6 }, seatNo: 15 },
  { id: 21, seatId: 50, cord: { x: 182.86, y: 210.49 }, seatNo: 17 },
  { id: 22, seatId: 51, cord: { x: 194.16, y: 210.96 }, seatNo: 19 },
  { id: 23, seatId: 52, cord: { x: 205.39, y: 211.29 }, seatNo: 21 },
  { id: 24, seatId: 53, cord: { x: 261.82, y: 208.35 }, seatNo: 14 },
  { id: 25, seatId: 54, cord: { x: 250.53, y: 209.6 }, seatNo: 16 },
  { id: 26, seatId: 55, cord: { x: 239.23, y: 210.49 }, seatNo: 18 },
  { id: 27, seatId: 56, cord: { x: 227.93, y: 210.96 }, seatNo: 20 },
  { id: 28, seatId: 57, cord: { x: 216.7, y: 211.29 }, seatNo: 22 },
  //
  { id: 29, seatId: 70, cord: { x: 155.14, y: 223.86 }, seatNo: 13 },
  { id: 30, seatId: 71, cord: { x: 166.44, y: 226.06 }, seatNo: 15 },
  { id: 31, seatId: 72, cord: { x: 177.74, y: 226.95 }, seatNo: 17 },
  { id: 32, seatId: 73, cord: { x: 189.04, y: 227.42 }, seatNo: 19 },
  { id: 33, seatId: 74, cord: { x: 200.26, y: 227.75 }, seatNo: 21 },
  { id: 34, seatId: 75, cord: { x: 211.04, y: 227.75 }, seatNo: 23 },
  { id: 35, seatId: 76, cord: { x: 266.95, y: 223.86 }, seatNo: 14 },
  { id: 36, seatId: 77, cord: { x: 255.65, y: 226.06 }, seatNo: 16 },
  { id: 37, seatId: 78, cord: { x: 244.35, y: 226.95 }, seatNo: 18 },
  { id: 38, seatId: 79, cord: { x: 233.05, y: 227.42 }, seatNo: 20 },
  { id: 39, seatId: 80, cord: { x: 221.83, y: 227.75 }, seatNo: 22 },
  //
  { id: 40, seatId: 94, cord: { x: 149.48, y: 239.77 }, seatNo: 11 },
  { id: 41, seatId: 95, cord: { x: 160.78, y: 241.96 }, seatNo: 13 },
  { id: 42, seatId: 96, cord: { x: 172.08, y: 242.85 }, seatNo: 15 },
  { id: 43, seatId: 98, cord: { x: 183.38, y: 243.33 }, seatNo: 17 },
  { id: 44, seatId: 99, cord: { x: 194.6, y: 243.65 }, seatNo: 19 },
  { id: 45, seatId: 100, cord: { x: 205.39, y: 243.65 }, seatNo: 21 },
  { id: 46, seatId: 101, cord: { x: 272.61, y: 239.77 }, seatNo: 12 },
  { id: 47, seatId: 102, cord: { x: 261.31, y: 241.96 }, seatNo: 14 },
  { id: 48, seatId: 103, cord: { x: 250.01, y: 242.85 }, seatNo: 16 },
  { id: 49, seatId: 104, cord: { x: 238.71, y: 243.33 }, seatNo: 18 },
  { id: 50, seatId: 105, cord: { x: 227.49, y: 243.65 }, seatNo: 20 },
  { id: 51, seatId: 106, cord: { x: 216.7, y: 243.65 }, seatNo: 22 },
  //
  { id: 52, seatId: 118, cord: { x: 144.32, y: 254.72 }, seatNo: 11 },
  { id: 53, seatId: 119, cord: { x: 155.33, y: 256.66 }, seatNo: 13 },
  { id: 54, seatId: 120, cord: { x: 166.63, y: 258.09 }, seatNo: 15 },
  { id: 55, seatId: 121, cord: { x: 177.92, y: 259.33 }, seatNo: 17 },
  { id: 56, seatId: 122, cord: { x: 189.15, y: 259.65 }, seatNo: 19 },
  { id: 57, seatId: 123, cord: { x: 199.93, y: 259.65 }, seatNo: 21 },
  { id: 58, seatId: 124, cord: { x: 211.04, y: 259.87 }, seatNo: 23 },
  { id: 59, seatId: 125, cord: { x: 277.77, y: 254.72 }, seatNo: 12 },
  { id: 60, seatId: 126, cord: { x: 266.76, y: 256.66 }, seatNo: 14 },
  { id: 61, seatId: 127, cord: { x: 255.46, y: 258.09 }, seatNo: 16 },
  { id: 62, seatId: 128, cord: { x: 244.16, y: 259.33 }, seatNo: 18 },
  { id: 63, seatId: 129, cord: { x: 232.94, y: 259.65 }, seatNo: 20 },
  { id: 64, seatId: 130, cord: { x: 222.16, y: 259.65 }, seatNo: 22 },
  //
  { id: 65, seatId: 140, cord: { x: 138.07, y: 271.62 }, seatNo: 9 },
  { id: 66, seatId: 141, cord: { x: 149.08, y: 273.56 }, seatNo: 11 },
  { id: 67, seatId: 142, cord: { x: 160.38, y: 275 }, seatNo: 13 },
  { id: 68, seatId: 143, cord: { x: 171.68, y: 276.23 }, seatNo: 15 },
  { id: 69, seatId: 144, cord: { x: 182.9, y: 276.55 }, seatNo: 17 },
  { id: 70, seatId: 145, cord: { x: 194.23, y: 277.08 }, seatNo: 19 },
  { id: 71, seatId: 146, cord: { x: 205.44, y: 277.3 }, seatNo: 21 },
  { id: 72, seatId: 147, cord: { x: 284.01, y: 271.62 }, seatNo: 10 },
  { id: 73, seatId: 148, cord: { x: 273.01, y: 273.56 }, seatNo: 12 },
  { id: 74, seatId: 149, cord: { x: 261.71, y: 275 }, seatNo: 14 },
  { id: 75, seatId: 150, cord: { x: 250.41, y: 276.23 }, seatNo: 16 },
  { id: 76, seatId: 151, cord: { x: 239.19, y: 276.55 }, seatNo: 18 },
  { id: 77, seatId: 152, cord: { x: 227.86, y: 277.08 }, seatNo: 20 },
  { id: 78, seatId: 153, cord: { x: 216.65, y: 277.3 }, seatNo: 22 },
  //
  { id: 79, seatId: 162, cord: { x: 132.83, y: 287.62 }, seatNo: 9 },
  { id: 80, seatId: 163, cord: { x: 143.84, y: 289.56 }, seatNo: 11 },
  { id: 81, seatId: 164, cord: { x: 155.14, y: 291 }, seatNo: 13 },
  { id: 82, seatId: 165, cord: { x: 166.44, y: 292.23 }, seatNo: 15 },
  { id: 83, seatId: 166, cord: { x: 177.66, y: 293.08 }, seatNo: 17 },
  { id: 84, seatId: 167, cord: { x: 188.99, y: 293.08 }, seatNo: 19 },
  { id: 85, seatId: 168, cord: { x: 200.2, y: 293.3 }, seatNo: 21 },
  { id: 86, seatId: 169, cord: { x: 211.04, y: 293.61 }, seatNo: 23 },
  { id: 87, seatId: 170, cord: { x: 289.25, y: 287.62 }, seatNo: 10 },
  { id: 88, seatId: 171, cord: { x: 278.25, y: 289.56 }, seatNo: 12 },
  { id: 89, seatId: 172, cord: { x: 266.95, y: 291 }, seatNo: 14 },
  { id: 90, seatId: 173, cord: { x: 255.65, y: 292.23 }, seatNo: 16 },
  { id: 91, seatId: 174, cord: { x: 244.43, y: 293.08 }, seatNo: 18 },
  { id: 92, seatId: 175, cord: { x: 233.1, y: 293.08 }, seatNo: 20 },
  { id: 93, seatId: 176, cord: { x: 221.89, y: 293.3 }, seatNo: 22 },
  //
  { id: 94, seatId: 184, cord: { x: 128.11, y: 303.5 }, seatNo: 7 },
  { id: 95, seatId: 185, cord: { x: 138.8, y: 305.59 }, seatNo: 9 },
  { id: 96, seatId: 186, cord: { x: 149.83, y: 307.02 }, seatNo: 11 },
  { id: 97, seatId: 187, cord: { x: 160.92, y: 308.09 }, seatNo: 13 },
  { id: 98, seatId: 188, cord: { x: 172.21, y: 308.9 }, seatNo: 15 },
  { id: 99, seatId: 189, cord: { x: 183.49, y: 309.39 }, seatNo: 17 },
  { id: 100, seatId: 190, cord: { x: 194.7, y: 309.61 }, seatNo: 19 },
  { id: 101, seatId: 191, cord: { x: 205.54, y: 309.91 }, seatNo: 21 },
  { id: 102, seatId: 192, cord: { x: 293.98, y: 303.5 }, seatNo: 8 },
  { id: 103, seatId: 193, cord: { x: 283.29, y: 305.59 }, seatNo: 10 },
  { id: 104, seatId: 194, cord: { x: 272.25, y: 307.02 }, seatNo: 12 },
  { id: 105, seatId: 195, cord: { x: 261.17, y: 308.09 }, seatNo: 14 },
  { id: 106, seatId: 196, cord: { x: 249.88, y: 308.9 }, seatNo: 16 },
  { id: 107, seatId: 197, cord: { x: 238.6, y: 309.39 }, seatNo: 18 },
  { id: 108, seatId: 198, cord: { x: 227.39, y: 309.61 }, seatNo: 20 },
  { id: 109, seatId: 199, cord: { x: 216.55, y: 309.91 }, seatNo: 22 },
  //
  { id: 110, seatId: 205, cord: { x: 122.56, y: 319.62 }, seatNo: 5 },
  { id: 111, seatId: 206, cord: { x: 133.25, y: 321.72 }, seatNo: 7 },
  { id: 112, seatId: 207, cord: { x: 144.29, y: 323.15 }, seatNo: 9 },
  { id: 113, seatId: 208, cord: { x: 155.37, y: 324.22 }, seatNo: 11 },
  { id: 114, seatId: 209, cord: { x: 166.66, y: 325.02 }, seatNo: 13 },
  { id: 115, seatId: 210, cord: { x: 177.94, y: 325.51 }, seatNo: 15 },
  { id: 116, seatId: 211, cord: { x: 189.15, y: 325.74 }, seatNo: 17 },
  { id: 117, seatId: 212, cord: { x: 199.99, y: 326.04 }, seatNo: 19 },
  { id: 118, seatId: 213, cord: { x: 211.14, y: 326.1 }, seatNo: 21 },
  { id: 119, seatId: 214, cord: { x: 244.15, y: 325.51 }, seatNo: 16 },
  { id: 120, seatId: 215, cord: { x: 299.53, y: 319.62 }, seatNo: 6 },
  { id: 121, seatId: 216, cord: { x: 288.83, y: 321.72 }, seatNo: 8 },
  { id: 122, seatId: 217, cord: { x: 277.8, y: 323.15 }, seatNo: 10 },
  { id: 123, seatId: 218, cord: { x: 266.71, y: 324.22 }, seatNo: 12 },
  { id: 124, seatId: 219, cord: { x: 255.43, y: 325.02 }, seatNo: 14 },
  { id: 125, seatId: 220, cord: { x: 232.94, y: 325.74 }, seatNo: 18 },
  { id: 126, seatId: 221, cord: { x: 222.1, y: 326.04 }, seatNo: 20 },
  //
  { id: 127, seatId: 224, cord: { x: 116.8, y: 335.62 }, seatNo: 1 },
  { id: 128, seatId: 225, cord: { x: 127.5, y: 337.72 }, seatNo: 3 },
  { id: 129, seatId: 226, cord: { x: 138.53, y: 339.14 }, seatNo: 5 },
  { id: 130, seatId: 227, cord: { x: 149.62, y: 340.22 }, seatNo: 7 },
  { id: 131, seatId: 228, cord: { x: 160.9, y: 341.02 }, seatNo: 9 },
  { id: 132, seatId: 229, cord: { x: 172.18, y: 341.51 }, seatNo: 11 },
  { id: 133, seatId: 230, cord: { x: 183.39, y: 341.73 }, seatNo: 13 },
  { id: 134, seatId: 231, cord: { x: 194.24, y: 342.04 }, seatNo: 15 },
  { id: 135, seatId: 232, cord: { x: 205.39, y: 342.09 }, seatNo: 17 },
  { id: 136, seatId: 233, cord: { x: 305.29, y: 335.62 }, seatNo: 2 },
  { id: 137, seatId: 234, cord: { x: 294.59, y: 337.72 }, seatNo: 4 },
  { id: 138, seatId: 235, cord: { x: 283.56, y: 339.14 }, seatNo: 6 },
  { id: 139, seatId: 236, cord: { x: 272.47, y: 340.22 }, seatNo: 8 },
  { id: 140, seatId: 237, cord: { x: 261.18, y: 341.02 }, seatNo: 10 },
  { id: 141, seatId: 238, cord: { x: 249.91, y: 341.51 }, seatNo: 12 },
  { id: 142, seatId: 239, cord: { x: 238.7, y: 341.73 }, seatNo: 14 },
  { id: 143, seatId: 240, cord: { x: 227.85, y: 342.04 }, seatNo: 16 },
  { id: 144, seatId: 241, cord: { x: 216.7, y: 342.09 }, seatNo: 18 },
  //
  { id: 145, seatId: 242, cord: { x: 122.56, y: 352.41 }, seatNo: 1 },
  { id: 146, seatId: 243, cord: { x: 133.25, y: 354.51 }, seatNo: 3 },
  { id: 147, seatId: 244, cord: { x: 144.29, y: 355.94 }, seatNo: 5 },
  { id: 148, seatId: 245, cord: { x: 155.37, y: 357.01 }, seatNo: 7 },
  { id: 149, seatId: 246, cord: { x: 166.66, y: 357.81 }, seatNo: 9 },
  { id: 150, seatId: 247, cord: { x: 177.94, y: 358.3 }, seatNo: 11 },
  { id: 151, seatId: 248, cord: { x: 189.15, y: 358.53 }, seatNo: 13 },
  { id: 152, seatId: 249, cord: { x: 199.99, y: 358.83 }, seatNo: 15 },
  { id: 153, seatId: 250, cord: { x: 210.95, y: 358.89 }, seatNo: 17 },
  { id: 154, seatId: 251, cord: { x: 299.53, y: 352.41 }, seatNo: 2 },
  { id: 155, seatId: 252, cord: { x: 288.83, y: 354.51 }, seatNo: 4 },
  { id: 156, seatId: 253, cord: { x: 277.8, y: 355.94 }, seatNo: 6 },
  { id: 157, seatId: 254, cord: { x: 266.71, y: 357.01 }, seatNo: 8 },
  { id: 158, seatId: 255, cord: { x: 255.43, y: 357.81 }, seatNo: 10 },
  { id: 159, seatId: 256, cord: { x: 244.15, y: 358.3 }, seatNo: 12 },
  { id: 160, seatId: 257, cord: { x: 232.94, y: 358.53 }, seatNo: 14 },
  { id: 161, seatId: 258, cord: { x: 222.1, y: 358.83 }, seatNo: 16 },
];

export const seatZoneArr = [
  { id: "seat-zone-A-left", seatArr: seatZoneALeft },
  { id: "seat-zone-A-center", seatArr: seatZoneACenter },
  { id: "seat-zone-A-right", seatArr: seatZoneARight },
  { id: "seat-zone-B", seatArr: seatZoneB },
  { id: "seat-zone-C", seatArr: seatZoneC },
  { id: "seat-zone-D", seatArr: seatZoneD },
  { id: "seat-zone-C", seatArr: seatZoneE },
  { id: "seat-zone-E", seatArr: seatZoneF },
  { id: "seat-zone-G", seatArr: seatZoneG },
  { id: "seat-zone-H", seatArr: seatZoneH },
  { id: "seat-zone-I", seatArr: seatZoneI },
  { id: "seat-zone-J", seatArr: seatZoneJ },
  { id: "seat-zone-K", seatArr: seatZoneK },
];

export const combinedSeats = _.sortBy(
  _.map(
    _.concat(
      seatZoneACenter,
      seatZoneALeft,
      seatZoneARight,
      seatZoneB,
      seatZoneC,
      seatZoneD,
      seatZoneE,
      seatZoneF,
      seatZoneG,
      seatZoneH,
      seatZoneI,
      seatZoneJ,
      seatZoneB,
      seatZoneK
    ),
    ({ id, ...rest }) => rest
  ),
  "seatId"
);
