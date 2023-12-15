import styles from './Header.module.css';

function Header() {
  return (
    <div>
      <nav className={styles.navBar}>
        <ul className={styles.ulContainer}>
          <li className={styles.liBullet}>Home</li>
          <li className={styles.liBullet}>About</li>
          <li className={styles.liBullet}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
