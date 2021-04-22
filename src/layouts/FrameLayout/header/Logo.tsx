import React, { FC, memo } from 'react';
import { HeaderLogo } from '@/layouts/FrameLayout/style';
import { IconFont } from '@/components';
import { useDispatch, useSelector } from '@@/plugin-dva/exports';
import { ConnectState } from '@/models/connect';
const LogoBox: FC = () => {
  const dispatch = useDispatch();
  const { leftSiderScroll } = useSelector(
    (state: ConnectState) => state.layout,
    (left, right) => left.leftSiderScroll === right.leftSiderScroll,
  );

  const clickScroll = () => {
    dispatch({
      type: 'layout/save',
      payload: {
        leftSiderScroll: !leftSiderScroll,
      },
    });
  };
  return (
    <HeaderLogo>
      <IconFont onClick={clickScroll} type={'icon-home_shousuo_h_icon'} />
      This is Logo
    </HeaderLogo>
  );
};
export default memo(LogoBox);
