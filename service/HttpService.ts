import { injectable } from "inversify";

import axios, { AxiosError, AxiosHeaders, AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEnvVars from "@/config/config";
import IHttpService from "./interface/IHttpService";

@injectable()
export default class HttpService implements IHttpService {
  private readonly baseUrl: string;
  private readonly clientId: string;
  constructor() {
    const envVars = getEnvVars();
    this.baseUrl = `${envVars.API_URL}`;
    this.clientId = `${envVars.CLIENT_ID}`;
  }

  externalCall(contentType: string = "application/json"): AxiosInstance {
    let instance = axios.create();
    instance.defaults.headers.common["Content-Type"] = contentType;
    return instance;
  }

  call(contentType: string = "application/json"): AxiosInstance {
    let instance = axios.create({
      baseURL: this.baseUrl,
      withCredentials: false,
      //transformRequest: formData => formData,
      headers: {
        clientId: this.clientId,
        "Content-Type": contentType,
      },
    });

    // instance.defaults.headers.common["clientId"] = this.clientId;
    // instance.defaults.headers.common["content-type"] = contentType;

    //FormData upload issue fixed by help of this link
    //https://github.com/axios/axios/issues/4406
    // instance.defaults.transformRequest = [(data) => data];
    // instance.defaults.transformRequest = (data: any) => {
    //     return data;
    // }

    instance.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //validate response
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            //!401 Unauthorized is the status code to return when the client provides no credentials or invalid credentials.
            //TODO: 'call logout' ==> need to implement
          } else if (error.response?.status === 403) {
            //!403 Forbidden is the status code to return when a client has valid credentials but not enough privileges to perform an action on a resource
            //TODO: 'call access-denied page' ==> need to implement
          }

          let statusCode: number = error.response?.status || 0;
          if (statusCode >= 400 && statusCode < 500) {
            return error;
          }
        }

        //TODO: handle global error. need to implement
        return error;
        //return Promise.reject(error);
      }
    );
    return instance;
  }
  callWithoutInterceptor(
    contentType: string = "application/json"
  ): AxiosInstance {
    let instance = axios.create({
      baseURL: this.baseUrl,
      //withCredentials: true,
    });
    instance.defaults.headers.common["clientId"] = this.clientId;
    instance.defaults.headers.common["Content-Type"] = contentType;
    console.log("instnce", instance);
    return instance;
  }
}
