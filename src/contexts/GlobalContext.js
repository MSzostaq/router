import { createContext } from "react";

const GlobalContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
});

export default GlobalContext;
