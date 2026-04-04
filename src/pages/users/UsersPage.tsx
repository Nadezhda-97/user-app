import { useEffect } from 'react';

import { useUsers } from '../../hooks/useUsers';
import { useUserStore } from '../../app/store/user-store';

import { UserCard } from '../../components/UserCard';
import { Loader } from '../../components/ui/Loader';
import { ErrorMessage } from '../../components/ui/ErrorMessage';

import styles from '../../styles/UsersPage/UsersPage.module.scss';

export const UsersPage = () => {
  const { data, isLoading, isError } = useUsers();
  const { activeUsers, archivedUsers, setUsers } = useUserStore();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message='Ошибка загрузки пользователей' />;

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Активные</h2>

      <div className={styles.grid}>
        {activeUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <h2 className={styles.title}>Архив</h2>

      <div className={styles.grid}>
        {archivedUsers.map((user) => (
          <UserCard key={user.id} user={user} isArchived />
        ))}
      </div>

      {archivedUsers.length === 0 && (
        <p className={styles.empty}>Нет пользователей</p>
      )}
    </div>
  );
};
