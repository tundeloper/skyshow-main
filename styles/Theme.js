// theme.js
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';


export const lightThemeColors = {
  primary: "#1350E8",
  primaryHover: "#144FE1",
  backgroundColor: "#020817",
  homeHeaderBg: "#102249",
  cardsBg: "#17203D",
  cardsBorder: "#2E3852",
  white: "#ffffff",
  black: "#000000",
  inputBg: "rgba(19, 80, 232, 0.3)",
  inputBorderFocus: "#1350E8",
  inputPlaceholder: "#8B9CC8",
  success: "#3CDF21",
  danger: "#FF0000",
};

export const darkThemeColors = {
  primary: "#48A0E8",
  primaryHover: "#4FAEE1",
  backgroundColor: "#050505",
  homeHeaderBg: "#111111",
  cardsBg: "#333333",
  cardsBorder: "#555555",
  white: "#ffffff",
  black: "#000000",
  inputBg: "rgba(72, 160, 232, 0.3)",
  inputBorderFocus: "#48A0E8",
  inputPlaceholder: "#8B9CC8",
  success: "#3CDF21",
  danger: "#FF0000",
};

const ThemeContext = createContext();


  export const ThemeWrapper = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);

  };

  const theme = isDarkMode ? darkThemeColors : lightThemeColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
