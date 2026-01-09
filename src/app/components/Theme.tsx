import React, { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
    type ThemeContextType = {
        theme: Theme;
        setTheme: (theme: Theme) => void;
    }
    const ThemeContext = createContext<ThemeContextType>({
        theme: "light",
        setTheme: () => {},
    });

export default function Theme( { children }: { children: ReactNode }){
    const [theme, setTheme] = useState<Theme>("light"); //default theme is light

    //effect to determine initial system preference and add listener
    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const updateTheme = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light");
        };
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme);
        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateTheme);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}