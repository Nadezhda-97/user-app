import { useState, useRef, useEffect } from 'react';
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

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.card} ${isArchived ? styles.archived : ''}`}>
      <img
        className={styles.avatar}
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt="avatar"
      />

      <div className={styles.content}>
        <div className={styles.header} ref={dropdownRef}>
          <h3>{user.username}</h3>

          <button
            className={styles.menuBtn}
            onClick={() => setOpen((prev) => !prev)}
          >
            ⋮
          </button>

          {open && (
            <div className={styles.dropdown}>
              {!isArchived ? (
                <>
                  <button onClick={() => navigate(`/users/${user.id}`)}>
                    Редактировать
                  </button>
                  <button onClick={() => archiveUser(user.id)}>
                    Архивировать
                  </button>
                  <button onClick={() => hideUser(user.id)}>
                    Скрыть
                  </button>
                </>
              ) : (
                <button onClick={() => restoreUser(user.id)}>
                  Активировать
                </button>
              )}
            </div>
          )}
        </div>

        <p className={styles.company}>{user.company.name}</p>
        <p className={styles.city}>{user.address.city}</p>
      </div>
    </div>
  );
};
