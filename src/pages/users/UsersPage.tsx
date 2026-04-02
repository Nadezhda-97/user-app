import { useEffect } from 'react';

import { useUsers } from '../../hooks/useUsers';
import { useUserStore } from '../../app/store/user-store';

import { UserCard } from '../../components/UserCard';

export const UsersPage = () => {
  const { data, isLoading, isError } = useUsers();
  const { activeUsers, archivedUsers, setUsers } = useUserStore();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <div>
      <h1>Users</h1>

      <h2>Active</h2>
      {activeUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      <h2>Archive</h2>
      {archivedUsers.map((user) => (
        <UserCard key={user.id} user={user} isArchived />
      ))}

      {archivedUsers.length === 0 && <p>No archived users</p>}
    </div>
  );
};
