import styles from '../../styles/UserEditPage/Sidebar.module.scss';

type Props = {
  userId: number;
};

export const Sidebar = ({ userId }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.avatar}
        src={`https://i.pravatar.cc/150?img=${userId}`}
        alt="avatar"
      />

      <nav className={styles.menu}>
        <button className={styles.active}>Данные профиля</button>
        <button>Рабочее пространство</button>
        <button>Приватность</button>
        <button>Безопасность</button>
      </nav>
    </aside>
  );
};
