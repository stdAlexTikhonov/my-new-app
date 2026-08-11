import { useTheme } from "@/context";
import styles from "./Header.module.scss";
import { BurgerIcon, MobileMenu, GridIcon } from "@/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ru" : "en";
    changeLanguage(nextLang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <BurgerIcon isOpen={open} onClick={() => setOpen((prev) => !prev)} />
        <div className={styles.logo}>
          <span className={styles.logoIcon}>
            <GridIcon size={35} gap={5} radius={15} background="transparent" />
          </span>
          <span className={styles.logoText}>Table Cafe</span>
        </div>
        <nav className={styles.nav}>
          <Link to="" className={styles.navLink}>
            <GridIcon hiddenCells={[0, 2, 7]} size={24} radius={15} />
            {t("nav.home")}
          </Link>
          <Link to="projects" className={styles.navLink}>
            <GridIcon hiddenCells={[1, 2]} size={24} radius={15} />
            {t("nav.projects")}
          </Link>
          <Link to="blog" className={styles.navLink}>
            <GridIcon hiddenCells={[2, 3, 5, 7]} size={24} radius={15} />
            {t("nav.blog")}
          </Link>
        </nav>

        <div className={styles.actions}>
          {/* Language Toggle Button */}
          <button
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label={t("aria.changeLanguage")}
          >
            <span className={styles.langText}>
              {i18n.language === "en" ? "RU" : "EN"}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={t("aria.toggleTheme")}
          >
            <span>{theme === "light" ? "🌙" : "☀️"}</span>
          </button>
        </div>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};
