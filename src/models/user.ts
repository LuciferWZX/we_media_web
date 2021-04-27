import { ImmerReducer, Effect } from 'umi';
import { User } from '@/utils/types/user';
import { LoginParams } from '@/services/type';
import { fetchUserInfo, login } from '@/services/user';
import { CodeStatus, ResType } from '@/utils/types/url';
import { message } from 'antd';

export interface UserModelState {
  user: User | null;
}
interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    login: Effect;
    fetchUserInfo: Effect;
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
    *fetchUserInfo(_, { call, put }) {
      const res: ResType<User> = yield call(fetchUserInfo);
      try {
        if (res.code === CodeStatus.succeed) {
          yield put({
            type: 'save',
            payload: {
              user: res.data,
            },
          });
        } else {
          message.error(res.message).then();
        }
      } catch (e) {
        console.error('fetchUserInfo');
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
  },
};
export default userModel;
