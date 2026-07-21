import { useState } from 'react';
import { Footer } from '@/components/Footer'; // Импортируем футер
import styles from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={styles.center}>
          <button
            type="button"
            className={styles.counter}
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </main>
      <Footer /> {/* Добавляем футер */}
    </div>
  );
};