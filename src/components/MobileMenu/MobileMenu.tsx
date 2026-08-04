import { useTheme } from '@/context';
import styles from './MobileMenu.module.scss';
import clsx from 'clsx';
import { GridIcon } from '../GridIcon';
import { useTranslation } from 'react-i18next';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ open, setOpen}: Props) => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ru' : 'en';
    changeLanguage(nextLang);
  };

  const closeMenu = () => setOpen(false);

  return (
    <div className={clsx(styles.menu, open && styles.opened)}>
        <nav className={styles.menuNav}>
            <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}><GridIcon hiddenCells={[0, 2, 7]} size={24} radius={15} /></span>
            {t('mobilemenu.home')}
            </a>
            <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}><GridIcon hiddenCells={[1,2]} size={24} radius={15} /></span>
            {t('mobilemenu.projects')}
            </a>
            <a href="#" className={styles.menuLink} onClick={closeMenu}>
            <span className={styles.menuIcon}><GridIcon hiddenCells={[2,3,5,7]} size={24} radius={15} /></span>
            {t('mobilemenu.blog')}
            </a>
        </nav>
        <div className={styles.menuFooter}>
            <button 
                className={styles.menuThemeToggle}
                onClick={() => {
                    toggleTheme();
                }}
                aria-label={t('aria.toggleTheme')}
                >
                <span>{theme === 'light' ? '🌙' : '☀️'}</span>
                <span className={styles.menuThemeLabel}>
                    {theme === 'light' ? t('mobilemenu.dark') : t('mobilemenu.light')}
                </span>
            </button>
            <button 
                className={styles.menuThemeToggle}
                onClick={() => {
                    toggleLanguage();
                }}
                aria-label={t('aria.changeLanguage')}
                >
                <span className={styles.menuThemeLabel}>
                    {t('mobilemenu.language')}
                </span>
            </button>
        </div>
    </div>
  );
};