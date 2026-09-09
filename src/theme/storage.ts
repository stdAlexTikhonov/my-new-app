import { themeNames, type ThemeName } from "./themes";

export const THEME_STORAGE_KEY = "my-new-app.theme";

export function getStoredThemeName(): ThemeName | null {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (stored === "light") {
    return "sewing_tin_light";
  }

  if (stored === "dark") {
    return "serika_dark";
  }

  if (stored !== null && themeNames.includes(stored as ThemeName)) {
    return stored as ThemeName;
  }

  return null;
}

export function setStoredThemeName(themeName: ThemeName): void {
  window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
}
