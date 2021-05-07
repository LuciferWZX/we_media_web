import { ImmerReducer, Effect } from 'umi';
import { abortProcessingVideo, queryProcessingVideo } from '@/services/video';
import { CodeStatus, ResType } from '@/utils/types/url';
import { Video } from '@/utils/types/video';
import { message } from 'antd';
import { queryAllSubarea } from '@/services/subarea';
import { SubareaType } from '@/utils/types/subarea';
import { queryAllTags } from '@/services/tags';
import { TagType } from '@/utils/types/tag';

export interface LayoutModelState {
  //左侧是否收起
  leftSiderScroll: boolean;
  //上传视频的visible
  uploadVideoVisible: boolean;
  //上次的视频编辑
  processingVideo: Video | null;
  //分区列表
  subareaList: SubareaType[];
  //标签列表
  tagList: TagType[];
}
interface LayoutModelType {
  namespace: 'layout';
  state: LayoutModelState;
  effects: {
    initOpenUploadVideoData: Effect;
    abortProcessingVideo: Effect;
  };
  reducers: {
    save: ImmerReducer<LayoutModelState>;
  };
}
const layoutModel: LayoutModelType = {
  namespace: 'layout',
  state: {
    leftSiderScroll: false,
    uploadVideoVisible: false,
    processingVideo: null,
    subareaList: [],
    tagList: [],
  },
  effects: {
    *initOpenUploadVideoData({ payload }, { all, call, put }) {
      const [result, subareaResult, tagsResult]: [
        ResType<Video>,
        ResType<SubareaType>,
        ResType<TagType[]>,
      ] = yield all([
        //@todo 查询未完成的视频
        call(queryProcessingVideo, payload),
        //@todo 查询所有的分区
        call(queryAllSubarea),
        //@todo 查询所有的Tag
        call(queryAllTags),
      ]);
      try {
        if (result.code === CodeStatus.succeed) {
          yield put({
            type: 'save',
            payload: {
              processingVideo: result.data,
            },
          });
        }
        if (subareaResult.code === CodeStatus.succeed) {
          yield put({
            type: 'save',
            payload: {
              subareaList: subareaResult.data,
            },
          });
        }
        if (tagsResult.code === CodeStatus.succeed) {
          yield put({
            type: 'save',
            payload: {
              tagList: tagsResult.data,
            },
          });
        }
      } catch (e) {
        console.log('查询尚未完成的视频出错：', e);
      }
    },
    *abortProcessingVideo({ payload }, { call }) {
      const result: ResType<Video | null> = yield call(
        abortProcessingVideo,
        payload,
      );
      try {
        if (result.code === CodeStatus.succeed) {
          console.log('删除成功');
          return 'success';
        } else {
          message.error(result.message).then();
          return 'failed';
        }
      } catch (e) {
        console.log('查询尚未完成的视频出错：', e);
      }
    },
  },
  reducers: {
    /**
     * todo
     * 更新state数据
     * @param state
     * @param payload
     */
    save(state, { payload }) {
      Object.getOwnPropertyNames(payload).forEach((key) => {
        // @ts-ignore
        state[key] = payload[key];
      });
    },
    // /**
    //  * todo
    //  * 切换sider收缩状态
    //  * @param state
    //  */
    // toggleSider(state){
    //   state.leftSiderScroll = !state.leftSiderScroll
    // }
  },
};
export default layoutModel;
