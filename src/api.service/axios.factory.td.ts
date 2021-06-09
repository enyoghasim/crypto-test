import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_BACKEND,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});

const request = <T>(method: Method, url: string, params: any): Promise<any> => {
  return api.request<T>({
    method,
    url,
    params
  });
};

export default request;
