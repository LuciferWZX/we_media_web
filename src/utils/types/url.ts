export enum Url {
  login = 'account/login',
}
export enum RequestMethod {
  POST = 'POST',
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
  succeed = 200,
}
