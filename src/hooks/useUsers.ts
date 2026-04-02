import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/fetchUsers';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    select: (data) => data.slice(0, 6),
  });
};
