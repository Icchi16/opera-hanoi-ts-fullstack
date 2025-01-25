import { createContext } from "react";

interface UserContextType {
  user: any;
  loading: boolean;
  error: any;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

