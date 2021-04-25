import { ImmerReducer, Effect } from 'umi';
import { User } from '@/utils/types/user';
import { LoginParams } from '@/services/type';
import { login } from '@/services/user';
import { ErrorResData, ResType } from '@/utils/types/url';

export interface UserModelState {
  user: User | null;
}
interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    login: Effect;
  };
  reducers: {
    save: ImmerReducer<UserModelState>;
  };
}
const userModel: UserModelType = {
  namespace: 'user',
  state: {
    user: null,
  },
  effects: {
    *login({ payload }, { call }) {
      return yield call(login, payload as LoginParams);
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
  },
};
export default userModel;
