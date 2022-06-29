import { FC } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import styles from './styles.module.scss';

type Props = {
  statusError: boolean;
  message: string;
};

const AttentionMessage: FC<Props> = ({ message, statusError }) => {
  return (
    <div
      className={styles.erroContainer}
      style={{
        opacity: statusError ? 1 : 0,
      }}
    >
      <div className={styles.error}>
        <BsExclamationCircle color="#B11A1A" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AttentionMessage;
