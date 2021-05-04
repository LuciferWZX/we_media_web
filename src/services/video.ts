import request from '@/utils/request';
import { RequestMethod, Url } from '@/utils/types/url';

/**
 * @todo 查询未完成编辑的视频
 * @param params
 */
export async function queryProcessingVideo(params: { id: string }) {
  return request(Url.get_uploading_video, {
    method: RequestMethod.GET,
    params: params,
  });
}

/**
 * @todo 删除未完成编辑的视频
 * @param params
 */
export async function abortProcessingVideo(params: { userId: string }) {
  return request(Url.abort_processing_video, {
    method: RequestMethod.POST,
    data: params,
  });
}
