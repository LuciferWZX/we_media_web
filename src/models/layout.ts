import { ImmerReducer } from 'umi';

export interface LayoutModelState {
  //左侧是否收起
  leftSiderScroll: boolean;
}
interface LayoutModelType {
  namespace: 'layout';
  state: LayoutModelState;
  effects: {};
  reducers: {
    save: ImmerReducer<LayoutModelState>;
  };
}
const layoutModel: LayoutModelType = {
  namespace: 'layout',
  state: {
    leftSiderScroll: false,
  },
  effects: {},
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
