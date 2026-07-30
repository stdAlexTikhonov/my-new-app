import { useTheme } from '@/context';
import styles from './MobileMenu.module.scss';
import clsx from 'clsx';
import { GridIcon } from '../GridIcon';

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
            <span className={styles.menuIcon}><GridIcon hiddenCells={[0, 2, 7]} size={24} radius={15} /></span>
            Главная
            </a>
            <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}><GridIcon hiddenCells={[1,2]} size={24} radius={15} /></span>
            Проекты
            </a>
            <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}><GridIcon hiddenCells={[2,3,5,7]} size={24} radius={15} /></span>
            Блог
            </a>
        </nav>
        <div className={styles.menuFooter}>
            <button 
            className={styles.menuThemeToggle}
            onClick={() => {
                toggleTheme();
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