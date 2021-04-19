import React, { FC, memo } from 'react';
import {
  FrameBox,
  FrameContent,
  StyledContent,
} from '@/layouts/FrameLayout/style';
import Header from '@/layouts/FrameLayout/header';
import Sider from '@/layouts/FrameLayout/sider';

const FrameLayout: FC = ({ children }) => {
  return (
    <FrameBox>
      <Header />
      <FrameContent>
        <Sider />
        <StyledContent>{children}</StyledContent>
      </FrameContent>
    </FrameBox>
  );
};
export default memo(FrameLayout);
