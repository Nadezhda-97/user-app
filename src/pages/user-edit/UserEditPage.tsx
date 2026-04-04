import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useUsers } from '../../hooks/useUsers';

import type { FormData } from '../../components/UserEditPage/schema';

import { BackButton } from '../../components/UserEditPage/BackButton';
import { Sidebar } from '../../components/UserEditPage/Sidebar';
import { UserForm } from '../../components/UserEditPage/UserForm';
import { Loader } from '../../components/ui/Loader';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { Portal } from '../../components/ui/Portal';

import styles from '../../styles/UserEditPage/UserEditPage.module.scss';

export const UserEditPage = () => {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: users, isLoading, isError } = useUsers();
  const user = users?.find((u) => u.id === Number(id));

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message='Ошибка загрузки пользователя' />;
  if (!user) return <ErrorMessage message='Пользователь не найден' />;

  const handleSubmit = (data: FormData) => {
    console.log('UPDATED DATA', data);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.page}>
      <BackButton />

      <div className={styles.layout}>
        <Sidebar userId={user.id} />

        <div className={styles.content}>
          <UserForm user={user} onSubmit={handleSubmit}/>
        </div>
      </div>

      {isModalOpen && (
        <Portal>
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.close}
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              <div className={styles.icon}>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className={styles.text}>Изменения сохранены!</p>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};
