import React, { FC, memo } from 'react';
import { StyledHome } from '@/pages/home/style';
import SwiperBox from '@/pages/home/SwiperBox';
import FeaturedVideos from '@/pages/home/featuredVideos';
import { Divider } from 'antd';
import SubscriptionVideos from '@/pages/home/subscriptionVideos';
import FindChannel from '@/pages/home/findChannel';
import { useMount, useUnmount } from 'ahooks';

const HomePage: FC = () => {
  useMount(() => {
    //NProgress.start();
    executeAnimation();
  });
  useUnmount(() => {});

  const executeAnimation = (): void => {};

  return (
    <StyledHome>
      <SwiperBox className={'home-element'} />
      <FeaturedVideos className={'home-element'} />
      <Divider type={'horizontal'} className={'home-element'} />
      <SubscriptionVideos className={'home-element'} />
      <Divider type={'horizontal'} className={'home-element'} />
      <FindChannel className={'home-element'} />
    </StyledHome>
  );
};
export default memo(HomePage);
