import { GridIcon } from './GridIcon';
import { useTheme } from '@/context';
import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

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
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};