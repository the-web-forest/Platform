import ErrorCode from './ErrorCodes';
import ErrorList from './IErrorList';

const resetPasswordError: ErrorList = {
  [ErrorCode.invalidEmail]: {
    code: ErrorCode.invalidEmail,
    message: 'E-mail invalido.',
  },
  default: { code: ErrorCode.unhadleError, message: 'Erro interno.' },
};

export default resetPasswordError;
