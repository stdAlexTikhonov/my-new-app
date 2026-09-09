import type { ThemeColors } from "./types";
import type { ThemeName } from "./themes";

export function applyThemeToRoot(
  themeName: ThemeName,
  theme: ThemeColors,
): void {
  const root = document.documentElement;

  root.style.setProperty("--bg-color", theme.bg);
  root.style.setProperty("--main-color", theme.main);
  root.style.setProperty("--caret-color", theme.caret);
  root.style.setProperty("--sub-color", theme.sub);
  root.style.setProperty("--sub-alt-color", theme.subAlt);
  root.style.setProperty("--text-color", theme.text);
  root.style.setProperty("--error-color", theme.error);
  root.style.setProperty("--error-extra-color", theme.errorExtra);
  root.style.setProperty("--colorful-error-color", theme.colorfulError);
  root.style.setProperty(
    "--colorful-error-extra-color",
    theme.colorfulErrorExtra,
  );

  root.dataset.theme = themeName;
  root.dataset.themeMode = isDarkTheme(theme) ? "dark" : "light";
}

export function isDarkTheme(theme: ThemeColors): boolean {
  const hex = theme.bg.replace("#", "");
  const normalized =
    hex.length === 3
      ? hex
          .split("")
          .map((char) => char + char)
          .join("")
      : hex;

  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness < 128;
}
