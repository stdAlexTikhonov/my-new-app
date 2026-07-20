import { useState } from 'react'
import styles from './App.module.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
      <section className={styles.center}>
        <button
          type="button"
          className={styles.counter}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      
  )
}
