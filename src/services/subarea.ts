import request from '@/utils/request';
import { RequestMethod, Url } from '@/utils/types/url';

/**
 * @todo 查询所有分区
 */
export async function queryAllSubarea() {
  return request(Url.query_all_subarea, {
    method: RequestMethod.GET,
  });
}
