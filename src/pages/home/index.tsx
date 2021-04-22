import React, { FC } from 'react';
import { StyledHome } from '@/pages/home/style';
import SwiperBox from '@/pages/home/SwiperBox';
import FeaturedVideos from '@/pages/home/featuredVideos';

const HomePage: FC = () => {
  return (
    <StyledHome>
      <SwiperBox />
      <FeaturedVideos />
    </StyledHome>
  );
};
export default HomePage;
