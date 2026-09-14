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

const defaultDarkThemeName: ThemeName = "serika_dark";
const defaultLightThemeName: ThemeName = "sewing_tin_light";

function getInitialThemeName(): ThemeName {
  return getStoredThemeName() ?? defaultThemeName;
}

function getInitialDarkThemeName(initialThemeName: ThemeName): ThemeName {
  return isDarkTheme(themes[initialThemeName])
    ? initialThemeName
    : defaultDarkThemeName;
}

function getInitialLightThemeName(initialThemeName: ThemeName): ThemeName {
  return isDarkTheme(themes[initialThemeName])
    ? defaultLightThemeName
    : initialThemeName;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const initialThemeName = getInitialThemeName();
  const [themeName, setThemeName] = useState<ThemeName>(initialThemeName);
  const [darkThemeName, setDarkThemeName] = useState<ThemeName>(() =>
    getInitialDarkThemeName(initialThemeName),
  );
  const [lightThemeName, setLightThemeName] = useState<ThemeName>(() =>
    getInitialLightThemeName(initialThemeName),
  );

  const theme = useMemo(() => themes[themeName], [themeName]);
  const isDark = useMemo(() => isDarkTheme(theme), [theme]);

  useEffect(() => {
    applyThemeToRoot(themeName, theme);
    setStoredThemeName(themeName);
  }, [themeName, theme]);

  const setTheme = (nextThemeName: ThemeName) => {
    setThemeName(nextThemeName);

    if (isDarkTheme(themes[nextThemeName])) {
      setDarkThemeName(nextThemeName);
      return;
    }

    setLightThemeName(nextThemeName);
  };

  const toggleTheme = () => {
    setThemeName((prevThemeName) =>
      isDarkTheme(themes[prevThemeName]) ? lightThemeName : darkThemeName,
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
