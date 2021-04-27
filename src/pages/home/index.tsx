import React, { FC, memo } from 'react';
import { StyledHome } from '@/pages/home/style';
import SwiperBox from '@/pages/home/SwiperBox';
import FeaturedVideos from '@/pages/home/featuredVideos';
import { Divider } from 'antd';
import SubscriptionVideos from '@/pages/home/subscriptionVideos';
import FindChannel from '@/pages/home/findChannel';
import { useMount, useUnmount } from 'ahooks';
const HomePage: FC = () => {
  const container = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  useMount(() => {
    //NProgress.start();
    executeAnimation();
  });
  useUnmount(() => {});

  const executeAnimation = (): void => {};

  return (
    <StyledHome variants={container} initial="hidden" animate="visible">
      <SwiperBox variants={item} className="animate__flash" />
      <FeaturedVideos className={'home-element'} />
      <Divider type={'horizontal'} className={'home-element'} />
      <SubscriptionVideos className={'home-element'} />
      <Divider type={'horizontal'} className={'home-element'} />
      <FindChannel className={'home-element'} />
    </StyledHome>
  );
};
export default memo(HomePage);
