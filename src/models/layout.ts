import { ImmerReducer, Effect } from 'umi';
import { abortProcessingVideo, queryProcessingVideo } from '@/services/video';
import { CodeStatus, ResType } from '@/utils/types/url';
import { VideoType } from '@/utils/types/video';
import { message } from 'antd';

export interface LayoutModelState {
  //左侧是否收起
  leftSiderScroll: boolean;
  //上传视频的visible
  uploadVideoVisible: boolean;
  //上次的视频编辑
  processingVideo: VideoType | null;
}
interface LayoutModelType {
  namespace: 'layout';
  state: LayoutModelState;
  effects: {
    queryProcessingVideo: Effect;
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
  },
  effects: {
    *queryProcessingVideo({ payload }, { call, put }) {
      const result: ResType<VideoType> = yield call(
        queryProcessingVideo,
        payload,
      );
      try {
        if (result.code === CodeStatus.succeed) {
          yield put({
            type: 'save',
            payload: {
              processingVideo: result.data,
            },
          });
        }
      } catch (e) {
        console.log('查询尚未完成的视频出错：', e);
      }
    },
    *abortProcessingVideo({ payload }, { call }) {
      const result: ResType<VideoType | null> = yield call(
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
