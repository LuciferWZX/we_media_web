export enum Url {
  login = 'account/login',
  fetch_account_info = 'account/fetch_account_info',
  get_uploading_video = 'video/getUploadingVideo',
  abort_processing_video = 'video/abortProcessingVideo',
  upload_processing_video = 'video/upload_processing_video',
  query_all_subarea = 'subarea/querySubarea',
  query_all_tags = 'video/queryAllTags',
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
