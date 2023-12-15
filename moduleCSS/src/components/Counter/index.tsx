import { useState } from 'react';
import styles from './Counter.module.css';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <div id={styles.buttonContainer}>
        <button className={styles.buttons} onClick={() => setCount(count + 1)}>
          add
        </button>
        <button className={styles.buttons} onClick={() => setCount(count - 1)}>
          subctract
        </button>
      </div>

      <div className={styles.result}>{count}</div>
    </div>
  );
}

export default Counter;
