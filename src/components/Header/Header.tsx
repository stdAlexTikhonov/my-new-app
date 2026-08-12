import { useTheme } from "@/context";
import styles from "./Header.module.scss";
import { BurgerIcon, MobileMenu, GridIcon } from "@/components";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Рефы для отслеживания кликов
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ru" : "en";
    changeLanguage(nextLang);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      // Блокировка скролла
      document.body.style.overflow = "hidden";

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Бургер-иконка с рефом */}
        <div ref={burgerRef}>
          <BurgerIcon isOpen={open} onClick={toggleMenu} />
        </div>

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

      {/* Мобильное меню с рефом */}
      <div ref={menuRef}>
        <MobileMenu open={open} setOpen={closeMenu} />
      </div>
    </header>
  );
};
