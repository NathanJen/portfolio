import { createContext } from "react";

// create a context with default values
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})
  
export default ThemeContext;
  