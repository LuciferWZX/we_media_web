export enum Pathname {
  home = '/frame/home',
  channels = '/frame/channels',
  categories = '/frame/categories',
  login = '/entrance/login',
}
export enum VideoAction {
  watchLater = 'watchLater',
  collect = 'collect',
  disCollect = 'disCollect',
  share = 'share',
}
export enum ResponseStatus {
  created = 201,
  //无权限
  Unauthorized = 401,
  //服务器出错
  ServerError = 500,
  //请求超时
  Timeout = 504,
}
export enum StoreKey {
  autoLogin = 'autoLogin', //自动登录
  token = 'token', //用户token
}
