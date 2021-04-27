import React, { FC, Fragment, memo } from 'react';
import { useModel } from '@@/plugin-model/useModel';
import { useMount, useUpdateEffect } from 'ahooks';
import { useDispatch, useSelector } from '@@/plugin-dva/exports';
import { StoreKey } from '@/utils/types/enum';
import { ConnectState } from '@/models/connect';
const AppWrapper: FC = ({ children }) => {
  const dispatch = useDispatch();
  //@todo 状态--------------------------------
  const user = useSelector(
    (state: ConnectState) => state.user.user,
    (left, right) => left === right,
  );
  const { setUser } = useModel('@@initialState', (model) => ({
    setUser: model.setInitialState,
  }));
  //@todo 方法--------------------------------
  useUpdateEffect(() => {
    setUser(user);
  }, [user]);
  //@todo 一开始加载数据
  useMount(() => {
    if (!user) {
      initUserInfo();
    }
  });
  //@todo 初始化用户信息
  const initUserInfo = (): void => {
    const store = require('storejs');
    const token: undefined | string = store.get(StoreKey.token);
    if (token) {
      //token存在
      //@todo refreshToken
      dispatch({
        type: 'user/fetchUserInfo',
      });
    }
  };
  return <Fragment>{children}</Fragment>;
};
export default memo(AppWrapper);
