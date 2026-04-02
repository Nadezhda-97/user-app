import { useNavigate } from 'react-router-dom';

import { useUserStore } from '../app/store/user-store';
import type { User } from '../types/User';

import styles from '../styles/UserCard.module.scss';

type Props = {
  user: User;
  isArchived?: boolean;
};

export const UserCard = ({ user, isArchived = false }: Props) => {
  const navigate = useNavigate();
  const { archiveUser, restoreUser, hideUser } = useUserStore();

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt="avatar"
      />

      <div className={styles.info}>
        <h3>{user.username}</h3>
        <p>{user.address.city}</p>
        <p>{user.company.name}</p>
      </div>

      <div className={styles.actions}>
        {!isArchived ? (
          <>
            <button onClick={() => navigate(`/users/${user.id}`)}>
              Edit
            </button>

            <button onClick={() => archiveUser(user.id)}>
              Archive
            </button>

            <button onClick={() => hideUser(user.id)}>
              Hide
            </button>
          </>
        ) : (
          <button onClick={() => restoreUser(user.id)}>
            Restore
          </button>
        )}
      </div>
    </div>
  );
};
