import ApiURI from '../core/apiURI';
import ApiErrors from '../errors/ApiErrors';
import resetPasswordError from '../errors/ResetPasswordErrors';
import { HttpService } from '../services/HTTP.service';
import { IHTTPService } from '../services/interfaces/IHTTPService';

type Response = {
  send: boolean;
};

type Request = {
  email: string;
};

export default class SendEmailToResetPasswordUseCase {
  private readonly httpService: IHTTPService;

  constructor() {
    this.httpService = new HttpService();
  }

  async run(email: string): Promise<boolean> {
    try {
      return (
        await this.httpService.post<Request, Response>(
          `${ApiURI.User.resetPassword}`,
          { email },
        )
      ).send;
    } catch (error: any) {
      const { data } = error.response;
      throw new ApiErrors(resetPasswordError).getError(data.Code);
    }
  }
}
