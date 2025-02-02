import { createContext } from "react";

interface UserContextType {
  user: undefined;
  loading: boolean;
  error: undefined;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
