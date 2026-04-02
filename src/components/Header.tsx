import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>at-work</div>

      <div className={styles.right}>
        <div className={styles.icons}>
          <button className={styles.iconBtn}>❤️</button>
          <button className={styles.iconBtn}>🔔</button>
        </div>

        <div className={styles.user}>
          <img
            className={styles.avatar}
            src="https://i.pravatar.cc/40"
            alt="user"
          />
          <span className={styles.name}>Ivan1234</span>
        </div>
      </div>
    </header>
  );
};
