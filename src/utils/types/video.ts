export interface VideoType {
  editStatus: VideoEditStatus;
  id: string;
  uploaderId: string;
  videoDesc: null | string;
  videoImage: null | string;
  videoTags: string[];
  videoTitle: string;
}
export enum VideoEditStatus {
  processing = 'processing', //编辑中
  finished = 'finished', //已完成
}
