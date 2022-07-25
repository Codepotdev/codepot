import { createContext } from "react";

export const AppContext = createContext({
  user: null,
  theme: null,
  isMenuOpened: false
});
