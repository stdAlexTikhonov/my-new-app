import { useEffect, useState } from 'react';
import { GridIcon } from './GridIcon';
import { useTheme } from '@/context';
import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);


  return (
    <header className={styles.header}>
      <div className={styles.container}>
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

        {/* Бургер-кнопка */}
        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        {/* Навигация */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <a href="#" className={styles.navLink} onClick={closeMenu}>Главная</a>
          <a href="#" className={styles.navLink} onClick={closeMenu}>Проекты</a>
          <a href="#" className={styles.navLink} onClick={closeMenu}>Блог</a>
          <a href="#" className={styles.navLink} onClick={closeMenu}>Контакты</a>
          
          <button 
            className={styles.themeToggleMobile} 
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            aria-label="Переключить тему"
          >
            {theme === 'light' ? '🌙' : '☀️'}
            <span className={styles.themeLabel}>
              {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
            </span>
          </button>
        </nav>

        {/* Кнопка темы для десктопа */}
        <button 
          className={styles.themeToggle} 
          onClick={toggleTheme}
          aria-label="Переключить тему"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Оверлей для закрытия меню */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
    </header>
  );
};