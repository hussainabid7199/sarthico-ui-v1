import IHttpService from './IHttpService';
import IAccountService from './IAccountService';



export default interface IUnitOfService {
  HttpService: IHttpService;
  AccountService: IAccountService;
}
