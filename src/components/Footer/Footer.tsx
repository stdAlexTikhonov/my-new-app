// Footer.tsx
import styles from './Footer.module.scss';
import { PolicyIcon } from './PolicyIcon';
import { ContactsIcon } from './ContactsIcon';
import { GithubIcon } from './GithubIcon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} Все права защищены
        </p>
        <nav className={styles.links}>
          <a href="#" className={styles.link}>
            <PolicyIcon />
            <span className={styles.text}>Политика конфиденциальности</span>
          </a>
          <a href="#" className={styles.link}>
            <ContactsIcon />
            <span className={styles.text}>Контакты</span>
          </a>
          <a href="#" className={styles.link}>
            <GithubIcon />
            <span className={styles.text}>GitHub</span>
          </a>
        </nav>
      </div>
    </footer>
  );
};