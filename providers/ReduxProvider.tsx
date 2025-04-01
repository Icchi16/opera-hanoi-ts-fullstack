"use client";

import { makeStore } from "@/store/store";
import { Provider } from "react-redux";

const store = makeStore();

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
