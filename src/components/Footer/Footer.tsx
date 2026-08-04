import styles from './Footer.module.scss';
import { PolicyIcon, ContactsIcon, GithubIcon } from './icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {t('footer.rights', { currentYear })}
        </p>
        <nav className={styles.links}>
          <a href="#" className={styles.link}>
            <PolicyIcon />
            <span className={styles.text}>{t('footer.privacy')}</span>
          </a>
          <a href="#" className={styles.link}>
            <ContactsIcon />
            <span className={styles.text}>{t('footer.contacts')}</span>
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