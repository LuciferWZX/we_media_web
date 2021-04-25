import request from '@/utils/request';
import { ErrorResData, RequestMethod, ResType, Url } from '@/utils/types/url';
import { LoginParams } from '@/services/type';
import { User } from '@/utils/types/user';

/**
 * @todo 登录
 * @param params
 */
export async function login(
  params: LoginParams,
): Promise<ResType<User | ErrorResData>> {
  return request(Url.login, {
    method: RequestMethod.POST,
    data: params,
  });
}
