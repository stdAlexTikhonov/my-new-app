import { useState } from "react";
import styles from "./App.module.scss";
import { useTranslation } from "react-i18next";

export const App = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <button
          type="button"
          className={styles.counter}
          onClick={() => setCount((count) => count + 1)}
        >
          {t("count", { num: count })}
        </button>
      </div>
    </main>
  );
};
