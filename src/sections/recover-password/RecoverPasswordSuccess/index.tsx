import { FC } from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { SignupSuccessicon } from '../../../components/SignupSuccessIcon';
import styles from './styles.module.scss';

export const RecoverPasswordSuccess: FC = () => {
  return (
    <div className={styles.container}>
      <HiOutlineMailOpen
        color="#63AF53"
        style={{ width: '75px', height: '75px' }}
      />
      <h2 style={{ marginTop: '20px' }}>E-mail de recuperação</h2>
      <h2>enviado com sucesso!</h2>

      <span style={{ marginTop: '20px' }}>
        Por favor, acesse seu e-mail e siga
      </span>
      <span>os passos para recuperar sua senha.</span>
      <div className={styles.iconWrapper}>
        <SignupSuccessicon />
      </div>
    </div>
  );
};
