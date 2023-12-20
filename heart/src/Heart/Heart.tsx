import { FaRegHeart } from 'react-icons/fa';
import styles from './Heart.module.css';

interface HeartProps {
  color: string;
}
function Heart({ color }: HeartProps) {
  return (
    <div className={styles.heartContainer}>
      <FaRegHeart className={[styles.heart, styles.btn, styles[`btn-${color}`]].join(' ')} />
    </div>
  );
}

export default Heart;
