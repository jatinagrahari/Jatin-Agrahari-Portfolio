import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  function darkTheme() {
    setThemeMode("dark");
  }

  function lightTheme() {
    setThemeMode("light");
  }

  useEffect(() => {
    localStorage.setItem("theme", themeMode);

    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        darkTheme,
        lightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
