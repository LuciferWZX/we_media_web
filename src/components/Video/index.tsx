import React, { FC } from 'react';
import { StyledTinyVideo, StyledVideo } from '@/components/video/style';
import { IconFont } from '@/components';
interface IProps {
  type: 'tiny' | 'normal';
}
const Video: FC<IProps> = ({ type }) => {
  if (type === 'tiny') {
    return (
      <StyledTinyVideo>
        <div className={'play'}>
          <IconFont className={'play'} type={'icon-play'} />
        </div>
        <div className={'view-tag'}>
          <IconFont className={'eye'} type={'icon-eye'} />
          2.7k
        </div>
        <IconFont className={'more'} type={'icon-more'} />
        <div className={'duration-time'}>40:00</div>
      </StyledTinyVideo>
    );
  }
  return <StyledVideo>vv</StyledVideo>;
};
export default Video;
