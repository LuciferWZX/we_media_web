import React, { FC, memo } from 'react';
import { StyledHome } from '@/pages/home/style';
import SwiperBox from '@/pages/home/SwiperBox';
import FeaturedVideos from '@/pages/home/featuredVideos';
import { Divider } from 'antd';
import SubscriptionVideos from '@/pages/home/subscriptionVideos';
import FindChannel from '@/pages/home/findChannel';
import { useMount } from 'ahooks';

const HomePage: FC = () => {
  useMount(() => {
    //NProgress.start();
  });
  return (
    <StyledHome>
      <SwiperBox />
      <FeaturedVideos />
      <Divider type={'horizontal'} />
      <SubscriptionVideos />
      <Divider type={'horizontal'} />
      <FindChannel />
    </StyledHome>
  );
};
export default memo(HomePage);
