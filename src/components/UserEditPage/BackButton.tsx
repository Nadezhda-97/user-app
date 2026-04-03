import { useNavigate } from 'react-router-dom';
import styles from '../../styles/UserEditPage/BackButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.back} onClick={() => navigate(-1)}>
      ← Назад
    </button>
  );
};
