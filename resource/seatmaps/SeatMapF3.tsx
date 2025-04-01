"use client";

import React from "react";
// import {
//   SEAT_RADIUS,
//   seatZoneArr,
//   zoneAnBLegendArr,
//   zoneEntryArr,
// } from "./SeatMapData";
// import styles from "./seatMapF1.module.css";
// import clsx from "clsx";

export interface SeatMapProps {
  mode: "minimap" | "interactive";
}
const SeatMapF3: React.FC<SeatMapProps> = ({ mode }) => {
  return (
    <div className="font-[family-name:var(--body)] text-primary">
      This is map 3
    </div>
  );
};

export default SeatMapF3;
