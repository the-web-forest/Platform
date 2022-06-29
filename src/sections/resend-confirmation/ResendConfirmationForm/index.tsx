import { useRouter } from 'next/router';
import { FC, FormEventHandler, useState } from 'react';
import AttentionMessage from '../../../components/AttentionMessage';
import FilledButton, { FilledColor } from '../../../components/FilledButton';
import Input from '../../../components/Input';
import { WebForestLogo } from '../../../components/WebForestLogo';
import SendValidateEmailUseCase from '../../../infra/useCases/sendValidateEmail.usecase';
import { StrUtils } from '../../../utils/str-utils';
import styles from './styles.module.scss';

export const ResendConfirmationForm: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [statusError, setStatusError] = useState(false);

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault();
    setStatusError(false);
    const isValidEmail = StrUtils.isEmailValid(email);
    if (!isValidEmail) {
      setEmailError('Atenção: Insira um e-mail válido');
      return;
    }
    try {
      emailError && setEmailError('');
      await new SendValidateEmailUseCase().run(email);
      router.push('/reenviar-confirmacao/sucesso');
    } catch (err) {
      setStatusError(true);
    }
  };

  return (
    <div className={styles.container}>
      <WebForestLogo />
      <h3>Reenviar e-mail de confirmação</h3>
      <span>Notamos que você já se cadastrou, vamos reenviar</span>
      <span>o link de confirmação, insira o seu e-mail.</span>

      <div className={styles.formContainer}>
        <div style={{ display: statusError ? 'block' : 'none', width: '100%' }}>
          <AttentionMessage
            statusError={statusError}
            message="Ops... E-mail invalido!"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="E-mail"
            width="100%"
            value={email}
            onChangeFunction={event => setEmail(event.target.value)}
            error={emailError}
          />
          <FilledButton
            color={FilledColor.budGreen}
            width="260px"
            type="submit"
          >
            Reenviar confirmação
          </FilledButton>
        </form>
      </div>
    </div>
  );
};
