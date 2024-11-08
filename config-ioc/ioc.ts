import { Container } from "inversify";
import { TYPES } from "./types";
import IUnitOfService from "@/service/interface/IUnitOfService";
import UnitOfService from "@/service/UnitOfService";
import IHttpService from "@/service/interface/IHttpService";
import HttpService from "@/service/HttpService";
import IAccountService from "@/service/interface/IAccountService";
import AccountService from "@/service/AccountService";

const container = new Container();
container.bind<IUnitOfService>(TYPES.IUnitOfService).to(UnitOfService).inSingletonScope();
container.bind<IHttpService>(TYPES.IHttpService).to(HttpService).inSingletonScope();
container.bind<IAccountService>(TYPES.IAccountService).to(AccountService).inSingletonScope(); 

export default container;