import React, { FC, memo } from 'react';
import { FrameBox, FrameContentLayout } from '@/layouts/FrameLayout/style';
import Header from '@/layouts/FrameLayout/header';
import Sider from '@/layouts/FrameLayout/sider';
import FrameContent from '@/layouts/FrameLayout/content';

const FrameLayout: FC = ({ children }) => {
  return (
    <FrameBox>
      <Header />
      <FrameContentLayout>
        <Sider />
        <FrameContent>{children}</FrameContent>
      </FrameContentLayout>
    </FrameBox>
  );
};
export default memo(FrameLayout);
