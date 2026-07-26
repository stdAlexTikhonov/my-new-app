import { GridIcon } from './GridIcon';
import { useTheme } from '@/context';
import styles from './Header.module.scss';
import { BurgerIcon } from '@/components';
import { useState } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <BurgerIcon isOpen={open} onClick={() => setOpen(prev => !prev)} />
        <div className={styles.logo}>
          <span className={styles.logoIcon}>
            <GridIcon 
              size={35} 
              gap={5} 
              radius={15}
              colors={['var(--accent)', 'var(--accent-border)', 'var(--text)']}
              background="transparent"
            />
          </span>
          <span className={styles.logoText}>Table Cafe</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Главная</a>
          <a href="#" className={styles.navLink}>Проекты</a>
          <a href="#" className={styles.navLink}>Блог</a>
        </nav>
        <button 
          className={styles.themeToggle} 
          onClick={toggleTheme}
          aria-label="Переключить тему"
        >
          <span>{theme === 'light' ? '🌙' : '☀️'}</span>
        </button>
      </div>
      <div className={clsx(styles.menu, open && styles.opened)}>
        

        <nav className={styles.menuNav}>
          <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}>🏠</span>
            Главная
          </a>
          <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}>📁</span>
            Проекты
          </a>
          <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}>📝</span>
            Блог
          </a>
          <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}>📞</span>
            Контакты
          </a>
        </nav>

        <div className={styles.menuFooter}>
          <button 
            className={styles.menuThemeToggle}
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            aria-label="Переключить тему"
          >
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
            <span className={styles.menuThemeLabel}>
              {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
            </span>
          </button>
          <button 
            className={styles.menuThemeToggle}
            onClick={() => {
              closeMenu();
            }}
            aria-label="Переключить тему"
          >
            <span className={styles.menuThemeLabel}>
              Контакты
            </span>
          </button>
          <button 
            className={styles.menuThemeToggle}
            onClick={() => {
              closeMenu();
            }}
            aria-label="Переключить тему"
          >
            <span className={styles.menuThemeLabel}>
              Github
            </span>
          </button>
          <button 
            className={styles.menuThemeToggle}
            onClick={() => {
              closeMenu();
            }}
            aria-label="Переключить тему"
          >
            <span className={styles.menuThemeLabel}>
              Политика конфиденциальности
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};