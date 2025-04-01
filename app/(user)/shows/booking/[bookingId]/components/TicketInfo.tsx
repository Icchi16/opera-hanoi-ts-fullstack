"use client";

import { combinedSeats } from "@/resource/seatmaps/SeatMapData";
import { RootState } from "@/store/store";
import _ from "lodash";
import { useSelector } from "react-redux";

const TicketInfo = () => {
  const seatSlice = useSelector((state: RootState) => state.seats.pickedSeats);

  const seatIds = _.map(seatSlice, "seatId");

  const pickedSeats = _.filter(combinedSeats, (seat) =>
    _.includes(seatIds, seat.seatId)
  );

  return (
    <div>
      {pickedSeats.map((seat, index) => (
        <div key={index}>{seat.seatNo}</div>
      ))}
    </div>
  );
};

export default TicketInfo;
