import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { User } from '../../types/User';
import { schema, type FormData } from './schema';

import { InputField } from './InputField';

import styles from '../../styles/UserEditPage/UserForm.module.scss';

type Props = {
  user: User;
  onSubmit: (data: FormData) => void;
};

export const UserForm = ({ user, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        phone: user.phone,
        company: user.company.name,
      });
    }
  }, [user, reset]);

  return (
    <>
      <h2 className={styles.title}>Данные профиля</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputField
          id="name"
          label="Имя"
          placeholder="Введите имя пользователя"
          {...register('name')}
          error={errors.name?.message}
        />

        <InputField
          id="username"
          label="Никнейм"
          placeholder="Введите никнейм"
          {...register('username')}
          error={errors.username?.message}
        />

        <InputField
          id="email"
          label="Почта"
          placeholder="Введите почту"
          {...register('email')}
          error={errors.email?.message}
        />

        <InputField
          id="city"
          label="Город"
          placeholder="Введите название города"
          {...register('city')}
          error={errors.city?.message}
        />

        <InputField
          id="phone"
          label="Телефон"
          placeholder="Введите номер телефона"
          {...register('phone')}
          error={errors.phone?.message}
        />

        <InputField
          id="company"
          label="Название компании"
          placeholder="Введите название компании"
          {...register('company')}
          error={errors.company?.message}
        />

        <button type="submit">Сохранить</button>
      </form>
    </>
  );
};
