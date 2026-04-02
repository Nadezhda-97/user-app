import { create } from 'zustand';
import type { User } from '../../types/User';

type UserStore = {
  activeUsers: User[];
  archivedUsers: User[];

  setUsers: (users: User[]) => void;
  archiveUser: (id: number) => void;
  restoreUser: (id: number) => void;
  hideUser: (id: number) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  activeUsers: [],
  archivedUsers: [],

  setUsers: (users) =>
    set({
      activeUsers: users,
      archivedUsers: [],
    }),

  archiveUser: (id) =>
    set((state) => {
      const user = state.activeUsers.find((u) => u.id === id);
      if (!user) return state;

      return {
        activeUsers: state.activeUsers.filter((u) => u.id !== id),
        archivedUsers: [...state.archivedUsers, user],
      };
    }),

  restoreUser: (id) =>
    set((state) => {
      const user = state.archivedUsers.find((u) => u.id === id);
      if (!user) return state;

      return {
        activeUsers: [...state.activeUsers, user],
        archivedUsers: state.archivedUsers.filter((u) => u.id !== id),
      };
    }),

  hideUser: (id) =>
    set((state) => ({
      activeUsers: state.activeUsers.filter((u) => u.id !== id),
    })),
}));
