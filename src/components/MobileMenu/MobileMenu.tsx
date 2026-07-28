import { useTheme } from '@/context';
import styles from './MobileMenu.module.scss';
import clsx from 'clsx';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ open, setOpen}: Props) => {
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setOpen(false);

  return (
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
        </div>
    </div>
  );
};