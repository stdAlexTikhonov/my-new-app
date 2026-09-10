import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context";
import { isDarkTheme } from "@/theme/dom";
import { themes, type ThemeName } from "@/theme/themes";
import styles from "./ThemePage.module.scss";

export const ThemePage = () => {
  const { t } = useTranslation();
  const { themeName, themeNames, setTheme } = useTheme();
  const [query, setQuery] = useState("");

  const { lightThemeNames, darkThemeNames } = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matchingThemeNames =
      normalizedQuery === ""
        ? themeNames
        : themeNames.filter((name) =>
            name.replaceAll("_", " ").toLowerCase().includes(normalizedQuery),
          );

    const sortedThemeNames = [...matchingThemeNames].sort(
      (leftName, rightName) => leftName.localeCompare(rightName),
    );

    return sortedThemeNames.reduce(
      (groups, name) => {
        if (isDarkTheme(themes[name])) {
          groups.darkThemeNames.push(name);
        } else {
          groups.lightThemeNames.push(name);
        }

        return groups;
      },
      {
        lightThemeNames: [] as ThemeName[],
        darkThemeNames: [] as ThemeName[],
      },
    );
  }, [query, themeNames]);

  return (
    <main className={styles.page}>
      <label className={styles.searchField}>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("themePage.searchPlaceholder")}
          className={styles.search}
        />
        <span className={styles.searchIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className={styles.searchIconSvg}>
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M20 20L16.65 16.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </label>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          {lightThemeNames.length === 0 && darkThemeNames.length === 0 ? (
            <p className={styles.empty}>{t("themePage.empty")}</p>
          ) : (
            <>
              {lightThemeNames.length > 0 ? (
                <section className={styles.group}>
                  <h2 className={styles.groupTitle}>{t("themePage.light")}</h2>
                  <div className={styles.groupList}>
                    {lightThemeNames.map((name) => {
                      const theme = themes[name as ThemeName];
                      const active = themeName === name;

                      return (
                        <button
                          key={name}
                          type="button"
                          onClick={() => setTheme(name)}
                          className={`${styles.themeButton} ${active ? styles.active : ""}`}
                        >
                          <span className={styles.themeName}>
                            {name.replaceAll("_", " ")}
                          </span>
                          <span className={styles.swatches}>
                            <span
                              className={styles.swatch}
                              style={{ background: theme.bg }}
                            />
                            <span
                              className={styles.swatch}
                              style={{ background: theme.main }}
                            />
                            <span
                              className={styles.swatch}
                              style={{ background: theme.sub }}
                            />
                            <span
                              className={styles.swatch}
                              style={{ background: theme.text }}
                            />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              ) : null}

              {darkThemeNames.length > 0 ? (
                <section className={styles.group}>
                  <h2 className={styles.groupTitle}>{t("themePage.dark")}</h2>
                  <div className={styles.groupList}>
                    {darkThemeNames.map((name) => {
                      const theme = themes[name as ThemeName];
                      const active = themeName === name;

                      return (
                        <button
                          key={name}
                          type="button"
                          onClick={() => setTheme(name)}
                          className={`${styles.themeButton} ${active ? styles.active : ""}`}
                        >
                          <span className={styles.themeName}>
                            {name.replaceAll("_", " ")}
                          </span>
                          <span className={styles.swatches}>
                            <span
                              className={styles.swatch}
                              style={{ background: theme.bg }}
                            />
                            <span
                              className={styles.swatch}
                              style={{ background: theme.main }}
                            />
                            <span
                              className={styles.swatch}
                              style={{ background: theme.sub }}
                            />
                            <span
                              className={styles.swatch}
                              style={{ background: theme.text }}
                            />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              ) : null}
            </>
          )}
        </div>
      </div>
    </main>
  );
};
