import { injectable } from 'inversify';
import { useContainer } from 'inversify-react';

import { TYPES } from '@/config-ioc/types';
import IUnitOfService from './interface/IUnitOfService';
import IHttpService from './interface/IHttpService';
import IAccountService from './interface/IAccountService';

@injectable()
export default class UnitOfService implements IUnitOfService {
  public HttpService: IHttpService;
  public AccountService: IAccountService;

  constructor(
    httpService = useContainer().get<IHttpService>(TYPES.IHttpService),
    accountService = useContainer().get<IAccountService>(TYPES.IAccountService),
  ) {
    this.HttpService = httpService;
    this.AccountService = accountService;
  }
}
