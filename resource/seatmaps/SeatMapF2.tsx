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

const SeatMapF2: React.FC<SeatMapProps> = ({ mode }) => {
  return (
    <div className="font-[family-name:var(--body)] text-primary">
      This is map 2
    </div>
  );
};

export default SeatMapF2;
