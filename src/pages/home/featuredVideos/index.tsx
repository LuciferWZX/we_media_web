import React, { FC } from 'react';
import { HomeCard, Video, VideoCard } from '@/components';
const FeaturedVideos: FC = () => {
  return (
    <div>
      <HomeCard title={'Featured Videos'} desc={'Channels You are Fallowing'}>
        <VideoCard banner={<Video type={'tiny'} />} />
      </HomeCard>
    </div>
  );
};
export default FeaturedVideos;
