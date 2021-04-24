import React, { FC, memo } from 'react';
import { StyledSider } from '@/layouts/FrameLayout/sider/style';
import MenuCard from '@/layouts/FrameLayout/sider/MenuCard';
import { useSelector } from '@@/plugin-dva/exports';
import { ConnectState } from '@/models/connect';

const Sider: FC = () => {
  const { leftSiderScroll } = useSelector(
    (state: ConnectState) => state.layout,
    (left, right) => left.leftSiderScroll === right.leftSiderScroll,
  );
  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={leftSiderScroll}
      collapsedWidth={0}
    >
      <MenuCard />
    </StyledSider>
  );
};
export default memo(Sider);
