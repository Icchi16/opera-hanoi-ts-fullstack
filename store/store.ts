import { configureStore } from "@reduxjs/toolkit";
import pickedSeatReducer from "./slices/pickedSeatsSlice";
import bookedSeatReducer from "./slices/bookedSeatsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      pickedSeats: pickedSeatReducer,
      bookedSeats: bookedSeatReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
