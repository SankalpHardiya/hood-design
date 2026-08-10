import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider: Applies the selected editorial color theme globally.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('wrap-theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    root.style.setProperty(
      '--color-background',
      theme === 'dark' ? '#171717' : '#F5F2EA'
    );
    root.style.setProperty(
      '--color-foreground',
      theme === 'dark' ? '#F5F2EA' : '#171717'
    );
    root.style.setProperty(
      '--color-border',
      theme === 'dark' ? 'rgba(245, 242, 234, 0.12)' : 'rgba(23, 23, 23, 0.12)'
    );

    localStorage.setItem('wrap-theme', theme);
  }, [theme]);

  // Switches between light and dark editorial themes.
  const toggleTheme = () => {
    setTheme((currentTheme) => (
      currentTheme === 'light' ? 'dark' : 'light'
    ));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme: Provides theme state and toggle action.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}