import ApiURI from '../core/apiURI';
import ApiErrors from '../errors/ApiErrors';
import validationEmailError from '../errors/ValidationEmailErrors';
import { HttpService } from '../services/HTTP.service';
import { IHTTPService } from '../services/interfaces/IHTTPService';

type Response = {
  send: boolean;
};

type SendValidationDTO = {
  email: string;
};

export default class SendValidateEmailUseCase {
  private readonly httpService: IHTTPService;

  constructor() {
    this.httpService = new HttpService();
  }

  async run(email: string): Promise<boolean> {
    try {
      return (
        await this.httpService.post<SendValidationDTO, Response>(
          `${ApiURI.User.sendValidation}`,
          { email },
        )
      ).send;
    } catch (error: any) {
      const { data } = error.response;
      throw new ApiErrors(validationEmailError).getError(data.Code);
    }
  }
}
