import { injectable } from "inversify";
import IAccountService from "./interface/IAccountService";
import IHttpService from "./interface/IHttpService";
import container from "@/config-ioc/ioc";
import { TYPES } from "@/config-ioc/types";
import LoginModel from "@/model/LoginModel";
import LoginDto from "@/dtos/LoginDto";
import Response from "@/dtos/Response";
import { AxiosResponse } from "axios";

@injectable()
export default class AccountService implements IAccountService {
  private readonly httpService: IHttpService;
  constructor(httpService = container.get<IHttpService>(TYPES.IHttpService)) {
    this.httpService = httpService;
  }

  login(model: LoginModel): Promise<AxiosResponse<Response<LoginDto>>> {
    let result = this.httpService
      .callWithoutInterceptor()
      .post<LoginDto, AxiosResponse<Response<LoginDto>>>(
        "/Account/Login",
        model
      );
    return result;
  }
}
