export enum Url {
  login = 'account/login',
  fetch_account_info = 'account/fetch_account_info',
}
export enum RequestMethod {
  POST = 'POST',
  GET = 'GET',
}
export interface ResType<T> {
  code: number;
  data: T;
  message: string;
}
export interface ErrorResData {
  time: string;
  url: string;
}
export enum CodeStatus {
  succeed = 0,
}
