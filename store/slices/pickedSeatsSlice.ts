import { Seat } from "@/types/extra";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

interface SeatState {
  pickedSeats: Seat[];
}

const initialState: SeatState = {
  pickedSeats: [],
};

const pickedSeatSlice = createSlice({
  name: "pickedSeats",
  initialState,
  reducers: {
    pickSeat: (state, action: PayloadAction<number>) => {
      const newSeat = { seatId: action.payload };
      state.pickedSeats = _.unionBy(state.pickedSeats, [newSeat], "seatId");
    },
    removeSeat: (state, action: PayloadAction<number>) => {
      state.pickedSeats = state.pickedSeats.filter(
        (seat) => seat.seatId !== action.payload
      );
    },
    clearSeats: (state) => {
      state.pickedSeats = [];
    },
  },
});

export const { pickSeat, removeSeat, clearSeats } = pickedSeatSlice.actions;
export default pickedSeatSlice.reducer;
