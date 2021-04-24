import { ImmerReducer } from 'umi';
import { User } from '@/utils/types/user';

export interface UserModelState {
  user: User | null;
}
interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {};
  reducers: {
    save: ImmerReducer<UserModelState>;
  };
}
const userModel: UserModelType = {
  namespace: 'user',
  state: {
    user: null,
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
  },
};
export default userModel;
