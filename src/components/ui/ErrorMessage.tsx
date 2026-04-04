import styles from '../../styles/ui/ErrorMessage.module.scss';

type Props = {
  message?: string;
};

export const ErrorMessage = ({ message = 'Что-то пошло не так' }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{message}</p>
    </div>
  );
};
