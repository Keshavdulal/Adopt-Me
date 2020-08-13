import { createContext } from "react";

// looks like a hook (state,updater)
// typing a context
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
