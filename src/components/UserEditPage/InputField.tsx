import type { InputHTMLAttributes } from 'react';
import styles from '../../styles/UserEditPage/InputField.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const InputField = ({ label, error, id, ...rest }: Props) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
      {error && <span>{error}</span>}
    </div>
  );
};
