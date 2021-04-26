import React, { FC, Fragment, memo } from 'react';
import { useModel } from '@@/plugin-model/useModel';
import { useMount, useUpdateEffect } from 'ahooks';
import { useDispatch } from '@@/plugin-dva/exports';
import { StoreKey } from '@/utils/types/enum';
const AppWrapper: FC = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useModel('@@initialState', (model) => ({
    user: model.initialState,
  }));
  useUpdateEffect(() => {
    console.log('更新');
    dispatch({
      type: 'user/save',
      payload: {
        user: user,
      },
    });
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
    }
  };
  return <Fragment>{children}</Fragment>;
};
export default memo(AppWrapper);
