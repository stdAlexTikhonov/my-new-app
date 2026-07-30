import { useTheme } from '@/context';
import styles from './Header.module.scss';
import { BurgerIcon, MobileMenu, GridIcon } from '@/components';
import { useState } from 'react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

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
              background="transparent"
            />
          </span>
          <span className={styles.logoText}>Table Cafe</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            <GridIcon hiddenCells={[0, 2, 7]} size={24} radius={15} />
            Главная
          </a>
          <a href="#" className={styles.navLink}>
            <GridIcon hiddenCells={[1,2]} size={24} radius={15} />
            Проекты
          </a>
          <a href="#" className={styles.navLink}>
            <GridIcon hiddenCells={[2,3,5,7]} size={24} radius={15} />
            Блог
          </a>
        </nav>
        <button 
          className={styles.themeToggle} 
          onClick={toggleTheme}
          aria-label="Переключить тему"
        >
          <span>{theme === 'light' ? '🌙' : '☀️'}</span>
        </button>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};