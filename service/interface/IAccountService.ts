import { AxiosResponse } from "axios";

import Response from "@/dtos/Response";
import LoginDto from "@/dtos/LoginDto";
import LoginModel from "@/model/LoginModel";

export default interface IAccountService {
  login(model: LoginModel): Promise<AxiosResponse<Response<LoginDto>>>;
}
