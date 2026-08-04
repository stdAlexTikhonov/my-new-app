import { useState } from 'react';
import { Header, Footer } from '@/components';
import { ThemeProvider } from '@/context';
import styles from './App.module.scss';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <div id="root">
        <Header />
        <main className={styles.main}>
          <div className={styles.center}>
            <button
              type="button"
              className={styles.counter}
              onClick={() => setCount((count) => count + 1)}
            >
              {t('count', { num: count })}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};