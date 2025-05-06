import { Seat } from "@/types/extra";
import { createSlice } from "@reduxjs/toolkit";
// import _ from "lodash";

const initialState: Seat["seatId"][] = [];

const bookedSeatSlice = createSlice({
  name: "bookedSeats",
  initialState,
  reducers: {
    getBookedSeats: () => {
      return [1, 99, 100, 101, 154, 200];
    },

    clearBookedSeats: () => {
      return [];
    },
  },
});

export const { getBookedSeats, clearBookedSeats } = bookedSeatSlice.actions;
export default bookedSeatSlice.reducer;
