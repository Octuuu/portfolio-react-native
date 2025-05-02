import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Detecta el tema del sistema operativo por defecto
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme || 'light');

  // Escucha cambios en el modo oscuro/claro del sistema
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    background: theme === 'light' ? '#ffffff' : '#121212',
    text: theme === 'light' ? '#000000' : '#ffffff',
    card: theme === 'light' ? '#f2f2f2' : '#1e1e1e',
    primary: theme === 'light' ? '#007aff' : '#0a84ff',
  };

  return (
    <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el tema
export const useTheme = () => useContext(ThemeContext);
