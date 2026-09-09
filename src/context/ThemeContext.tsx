import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyThemeToRoot, isDarkTheme } from "@/theme/dom";
import {
  defaultThemeName,
  themeNames,
  themes,
  type ThemeName,
} from "@/theme/themes";
import { getStoredThemeName, setStoredThemeName } from "@/theme/storage";
import type { ThemeColors } from "@/theme/types";

interface ThemeContextType {
  themeName: ThemeName;
  theme: ThemeColors;
  themeNames: ThemeName[];
  setTheme: (themeName: ThemeName) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

function getInitialThemeName(): ThemeName {
  return getStoredThemeName() ?? defaultThemeName;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(getInitialThemeName);

  const theme = useMemo(() => themes[themeName], [themeName]);
  const isDark = useMemo(() => isDarkTheme(theme), [theme]);

  useEffect(() => {
    applyThemeToRoot(themeName, theme);
    setStoredThemeName(themeName);
  }, [themeName, theme]);

  const setTheme = (nextThemeName: ThemeName) => {
    setThemeName(nextThemeName);
  };

  const toggleTheme = () => {
    setThemeName((prevThemeName) =>
      prevThemeName === "serika_dark" ? "sewing_tin_light" : "serika_dark",
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        theme,
        themeNames,
        setTheme,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export type { ThemeName };
export type { ThemeColors };
