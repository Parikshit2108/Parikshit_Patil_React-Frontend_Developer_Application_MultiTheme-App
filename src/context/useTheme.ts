import { createContext, useContext } from "react";
import type { ThemeContextType } from "./ThemeContext";

export const useTheme = () => useContext(ThemeContext);
export const ThemeContext = createContext<ThemeContextType>({ theme: "light", setTheme: () => { } })
