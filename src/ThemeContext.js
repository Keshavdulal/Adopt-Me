import { createContext } from "react";

// looks like a hook (state,updater)
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
