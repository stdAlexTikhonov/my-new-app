// Footer.tsx
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} Все права защищены
        </p>
        <nav className={styles.links}>
          <a href="#" className={styles.link}>Политика конфиденциальности</a>
          <a href="#" className={styles.link}>Контакты</a>
          <a href="#" className={styles.link}>GitHub</a>
        </nav>
      </div>
    </footer>
  );
};