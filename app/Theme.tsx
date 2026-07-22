"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface ThemeContextType {
  mode: "light" | "dark";
  Setmode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, Setmode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) Setmode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, Setmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export default ThemeContext;
