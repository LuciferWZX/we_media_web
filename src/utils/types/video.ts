export interface Video {
  editStatus: VideoEditStatus;
  id: string;
  uploaderId: string;
  videoDesc: null | string;
  videoImage: null | string;
  videoTags: string[];
  videoTitle: string;
  videoBucketKey: string;
}
export enum VideoEditStatus {
  processing = 'processing', //编辑中
  finished = 'finished', //已完成
}

export enum VideoType {
  homemade = 0, //自制
  reprint = 1, //转载
}
