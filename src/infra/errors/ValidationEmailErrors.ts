import ErrorCode from './ErrorCodes';
import ErrorList from './IErrorList';

const validationEmailError: ErrorList = {
  [ErrorCode.invalidEmailValidation]: {
    code: ErrorCode.invalidEmailValidation,
    message: 'E-mail invalido para validação',
  },
  default: { code: ErrorCode.unhadleError, message: 'Erro interno.' },
};

export default validationEmailError;
