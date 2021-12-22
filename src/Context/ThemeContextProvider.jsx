import React, { useState } from "react";

export const themeContext = React.createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <themeContext.Provider value={[theme, handleTheme]}>
      {children}
    </themeContext.Provider>
  );
}
