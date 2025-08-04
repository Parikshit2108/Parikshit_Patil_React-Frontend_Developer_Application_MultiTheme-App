import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";


export type Theme = "light" | "dark" | "colorful";


export interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void
}



export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>('light')

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme
        if (storedTheme) setThemeState(storedTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            <div className={`theme-${theme} min-h-screen transition-all duration-500`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}