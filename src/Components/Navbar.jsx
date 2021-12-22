import { useContext } from "react";
import { themeContext } from "../Context/ThemeContextProvider";

export default function Navbar() {
  const [theme, handleTheme] = useContext(themeContext);
  if (theme === "light") {
    return (
      <div style={{ background: "skyblue", padding: "10px" }}>
        <button onClick={handleTheme}>Dark Mode</button>
      </div>
    );
  } else {
    return (
      <div style={{ background: "darkblue", padding: "10px" }}>
        <button onClick={handleTheme}>Light Mode</button>
      </div>
    );
  }
}
