import styles from "./Footer.module.scss";
import { ThemeIcon, ContactsIcon, GithubIcon } from "./icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {t("footer.rights", { currentYear })}
        </p>
        <nav className={styles.links}>
          <Link to="theme" className={styles.link}>
            <ThemeIcon />
            <span className={styles.text}>{t("footer.theme")}</span>
          </Link>
          <Link to="contacts" className={styles.link}>
            <ContactsIcon />
            <span className={styles.text}>{t("footer.contacts")}</span>
          </Link>
          <a
            href="https://github.com/stdAlexTikhonov/my-new-app"
            target="_blank"
            className={styles.link}
          >
            <GithubIcon />
            <span className={styles.text}>GitHub</span>
          </a>
        </nav>
      </div>
    </footer>
  );
};
