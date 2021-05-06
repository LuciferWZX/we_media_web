import request from '@/utils/request';
import { RequestMethod, Url } from '@/utils/types/url';

/**
 * @todo 查询全部tags
 */
export async function queryAllTags() {
  return request(Url.query_all_tags, {
    method: RequestMethod.GET,
  });
}
