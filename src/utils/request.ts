import { extend, ResponseError } from 'umi-request';
import { ResponseStatus, StoreKey } from '@/utils/types/enum';
import store from 'storejs';
/**
 * todo
 * 拦截返回的错误处理
 * @param err
 */
const errorHandler = (err: ResponseError): Response => {
  const { response, data } = err;
  switch (response.status) {
    case ResponseStatus.created: {
      return data;
    }
    case ResponseStatus.ServerError: {
      // if (data.code === CodeStatus.failed) {
      //   return data;
      // }
      return data;
    }
    case ResponseStatus.Unauthorized: {
      return data;
    }
    case ResponseStatus.GatewayTimeout: {
      return {
        code: -1,
        message: '网关超时',
        data: null,
      } as any;
    }
  }

  return response;
};
const request = extend({
  prefix: '/api/',
  errorHandler: errorHandler,
  credentials: 'omit',
  timeout: 5000,
});
/**
 * todo
 * 发出请求前拦截
 */
request.interceptors.request.use((url, options): any => {
  //console.log('请求request:', { url, options });

  const token: string | undefined = store.get(StoreKey.token);
  let config: any = {
    ...options.headers,
  };
  if (token) {
    config.token = token;
  }
  options.headers = {
    'Content-Type': 'application/json',
    'If-Modified-Since': 0,
    Accept: 'application/json',
    ...config,
  };
  return {
    url: url,
    options: options,
  };
});
/**
 * todo
 * 拦截返回的response
 */
request.interceptors.response.use(
  (response, options): Response => {
    //console.log('返回response:', { response, options });
    return response;
  },
);
export default request;
