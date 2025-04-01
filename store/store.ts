import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./slices/seatSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      seats: seatReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
