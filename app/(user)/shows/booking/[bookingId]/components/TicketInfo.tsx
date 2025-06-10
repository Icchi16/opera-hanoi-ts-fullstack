"use client";

import { combinedSeats } from "@/resource/seatmaps/SeatMapF1Data";
import { RootState } from "@/store/store";
import _ from "lodash";
import { useSelector } from "react-redux";

const TicketInfo = () => {
  const pickedSeatSlice = useSelector(
    (state: RootState) => state.pickedSeats.pickedSeats
  );

  const seatIds = _.map(pickedSeatSlice, "seatId");

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
